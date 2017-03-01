/**
 * @author waterTian
 */
TY.TYplayer = function(videoUrl, divID, videoBg, isLive, skin_bottom) {
    var scope = this;

    this._dom = $(divID);

    if (TY.isAndroid) TY.dpr = 1;

    //////
    this._dom.append(TY.videoDiv);
    var h5_player = this._dom.find(".h5_player");
    h5_player.append(TY.videoTemplate);

    //videoBg
    h5_player.append(TY.videoBgTemplate);
    $(".h5_player_bg").css("background-image", 'url(' + videoBg + ')');
    showPlayerBg();

    //video
    this._video = h5_player.find("video")[0];
    this._video.src = videoUrl;
    addVideoEvents(this._video);

    //skin
    this._skin = new TY.TYskin(this._video, this._dom, isLive, skin_bottom);
    this._skin.showPause();
    this._skin.setProcess(0);
    this._skin.addEventListener("VidoeClick", function(e) {
        scope.dispatchEvent("VidoeClick", e);
    });
    //Resize the windows
    window.addEventListener('resize', resetPostions, false);

    function resetPostions(e) {
        // if (TY.isAndroid) return;
        var _vh = scope._video.clientHeight;
        var _h = $(window).height();
        var _top = (_h - _vh) * 0.5;
        $("#video").css("margin-top", _top);
        scope._skin.resetPostions();

        setTimeout(function() {
            var _vh = scope._video.clientHeight;
            var _h = $(window).height();
            var _top = (_h - _vh) * 0.5;
            $("#video").css("margin-top", _top);
            scope._skin.resetPostions();
        }, 1600);
    }


    function showPlayerBg() {
        $(".h5_player_bg").css("opacity", 0);
        $(".h5_player_bg").css("transform", 'scale(1.5,1.5)');
        $(".h5_player_bg").animate({
            opacity: 1,
            transform: 'scale(1,1)'
        }, 300, 'ease-out')
    }

    function hildPlayerBg() {
        if ($(".h5_player_bg")[0].style.display == "none") return;
        setTimeout(function() {
            $(".h5_player_bg").animate({
                opacity: 0,
                transform: 'scale(1.5,1.5)'
            }, 300, 'ease-out', function() {
                $(".h5_player_bg").hide();
            });
            if (!isLive) scope._skin.showProcessBar();
        }, 300);
    }


    function addVideoEvents(_v) {
        _v.addEventListener("error", videoError, false);

        _v.addEventListener("loadstart", function() { //客户端开始请求数据
            TY.Log("loadstart");
            scope._skin.showPause();
        }, false);
        _v.addEventListener("loadedmetadata", function() {
            TY.Log("loadedmetadata");
        }, false);
        _v.addEventListener("loadeddata", function() {
            TY.Log("loadeddata_" + _v.clientHeight);
        }, false);
        _v.addEventListener("waiting", function() {
            TY.Log("waiting");
            scope._skin.showWaiting();
        }, false);
        _v.addEventListener("canplay", function() {
            TY.Log("canplay")
            scope._skin.hideWaiting();
        }, false);
        _v.addEventListener("canplaythrough", function() {}, false); //可以播放，歌曲全部加载完毕
        _v.addEventListener("play", function() {
            TY.Log("play");
        }, false);
        _v.addEventListener("playing", function() {
            TY.Log("playing");
            if (scope._skin.isToPlayed) hildPlayerBg();
            if (scope._skin.isToPlayed) scope._skin.hidePause();
            resetPostions();

        }, false);
        _v.addEventListener("pause", function() {
            TY.Log("pause");
            scope._skin.showPause();
        }, false);
        _v.addEventListener("ended", function() {
            TY.Log("ended");
            scope._skin.seek(0);
            scope.dispatchEvent("VidoeEnd", scope);
        }, false);
        _v.addEventListener("progress", function() {}, false);
        _v.addEventListener("suspend", function() {}, false); //延迟下载
        _v.addEventListener("abort", function() {}, false); //客户端主动终止下载（不是因为错误引起）
        _v.addEventListener("stalled", function() { //网速失速
            TY.Log("stalled")
        }, false);

        _v.addEventListener("seeking", function() {
            TY.Log("seeking")
        }, false);
        _v.addEventListener("seeked", function() {}, false);
        _v.addEventListener("ratechange", function() {}, false); //播放速率改变
        _v.addEventListener("durationchange", function() {}, false); //资源长度改变
        _v.addEventListener("volumechange", function() {}, false); //音量改变
        _v.addEventListener("timeupdate", function() {
            // TY.Log("timeupdate");
            update_time();
        }, false);

    }

    function videoError() {
        var err = {};
        err.code = scope._video.error.code;
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
        TY.Log("player VidoeError:" + err.error);

        scope.dispatchEvent("VidoeError", err);

        scope._skin.showWarning();
        scope._skin.showWarning();
    }


    function update_time() {
        scope._skin.updateBar();
    }
};


TY.TYplayer.prototype = {
    constructor: TY.TYplayer,
    toPlay: function() {
        this._skin.toPlay();
    },
    removeThis: function() {
        document.addEventListener("touchmove", function(e) {});
        this._skin.removeThis();
        this._video.remove();
        var videoBox = this._dom.get(0)
        var _num = videoBox.childNodes.length;
        for (var i = 0; i < _num; ++i) {
            videoBox.removeChild(videoBox.childNodes[0]);
        }
    }
};
TY.extend(TY.TYplayer.prototype, TY.EventDispatcher.prototype);