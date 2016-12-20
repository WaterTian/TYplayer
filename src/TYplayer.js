/**
 * @author waterTian
 */
// namespace:
this.TY = this.TY || {};

(function() {
    "use strict";

    var _self;
    var _video, _dom , _player;
    var _skin;
    var player_bg;
    var _w = $(window).width();
    var _h = $(window).width();

    function TYplayer(videoUrl, divClass, videoBg) {

        _self = this;
        TY.videoUrl = videoUrl;
        _dom = $(divClass);

        // if (!TY.isMobileDevice) return;

        //////
        _dom.append(TY.videoDiv);
        _player = _dom.find(".h5_player");
        _player.append(TY.videoTemplate);

        //videoBg
        _player.append(TY.videoBgTemplate);
        player_bg = $(".h5_player_bg");
        player_bg.css("background-image", 'url(' + videoBg + ')');


        //video
        _video = _player.find("video")[0];
        _video.src = videoUrl;
        tyLog(_video);
        addVideoEvents(_video);



        //skin
        _skin = new TY.skin(_video, _dom);
        _skin.showPause();
    }

    function hide_palyerBg() {
        player_bg.hide();
    }


    function tyLog(_t) {
        if (!TY.Debug) return;
        if (TY.isWeixin) alert(_t);
        else console.log(_t);
    }


    function addVideoEvents(_video) {
        _video.addEventListener("error", videoError, false);

        _video.addEventListener("loadstart", function() {
            tyLog("loadstart");
            _skin.showWaiting();
        }, false);
        _video.addEventListener("loadedmetadata", function() {}, false);
        _video.addEventListener("waiting", function() {
            tyLog("waiting");
            _skin.showWaiting();
        }, false);
        _video.addEventListener("canplay", function() {
            tyLog("canplay");
            $(".h5_player_waiting").hide();
            _skin.showPause();
            hide_palyerBg();
        }, false);
        _video.addEventListener("play", function() {
            tyLog("play");
        }, false);
        _video.addEventListener("playing", function() {
            tyLog("playing");
            $(".h5_player_pause").hide();
        }, false);
        _video.addEventListener("pause", function() {
            tyLog("pause");
            _skin.showPause();
        }, false);
        _video.addEventListener("ended", function() {
            tyLog("ended");
            _self.dispatchEvent("VidoeEnd", this);
        }, false);
        _video.addEventListener("progress", function() {}, false);
        _video.addEventListener("suspend", function() {}, false);
        _video.addEventListener("abort", function() {
            tyLog("abort")
        }, false);
        _video.addEventListener("stalled", function() {
            tyLog("stalled")
        }, false);

        _video.addEventListener("seeking", function() {
            tyLog("seeking")
        }, false);
        _video.addEventListener("timeupdate", function() {
            // tyLog("timeupdate");
            update_time();
        }, false);

    }

    function videoError() {
        var err = {};
        err.code = _video.error.code;
        err.error = ""
        switch (err.code) {
            case 1:
                err.error = "播放过程中用户终止";
                break;
            case 2:
                err.error = "播放过程中网络错误";
                break;
            case 3:
                err.error = "播放过程中解码错误";
                break;
            case 4:
                err.error = "播放过程中URL无效"
        }
        tyLog("player VidoeError:" + err.error);

        _self.dispatchEvent("VidoeError", err);
    }

    function update_time() {
        _skin.updateBar();
    }

    function remove_this()
    {
        _video.remove();
        var videoBox = _dom.get(0)
        var _num = videoBox.childNodes.length;
        for (var i = 0; i < _num; ++i) {
            videoBox.removeChild(videoBox.childNodes[0]);
        }
    }

    TYplayer.prototype = Object.assign(TY.EventDispatcher.prototype, {
        constructor: TYplayer,
        removeThis:remove_this
    });


    TY.TYplayer = TYplayer;
})();