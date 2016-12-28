/**
 * @author waterTian
 */
TY.TYplayer = function(videoUrl, divID, videoBg, isLive) {
    _TYplayer = this;

    _dom = $(divID);

    // if (!TY.isMobileDevice) return;
    if (TY.isAndroid) TY.dpr = 1;

    //////
    _dom.append(TY.videoDiv);
    _player = _dom.find(".h5_player");
    _player.append(TY.videoTemplate);

    //videoBg
    _player.append(TY.videoBgTemplate);
    player_bg = $(".h5_player_bg");
    player_bg.css("background-image", 'url(' + videoBg + ')');
    showPlayerBg();

    function showPlayerBg() {
        player_bg.css("opacity", 0);
        player_bg.css("transform", 'scale(1.5,1.5)');
        player_bg.animate({
            opacity: 1,
            transform: 'scale(1,1)'
        }, 200, 'ease-out')
    }

    function hildPlayerBg() {
        player_bg.animate({
            opacity: 0,
            transform: 'scale(1.5,1.5)'
        }, 200, 'ease-out', function() {
            player_bg.hide();
        })
    }

    //video
    _video = _player.find("video")[0];
    _video.src = videoUrl;
    tyLog(_video);

    // 
    addVideoEvents(_video);

    //skin
    _skin = new TY.TYskin(_video, _dom, isLive);
    _skin.showPause();
    _skin.setProcess(0);
    _skin.addEventListener("VidoeClick", function(e) {
        _TYplayer.dispatchEvent("VidoeClick", e);
    })


    function tyLog(_t) {
        if (!TY.Debug) return;
        if (TY.isWeixin) alert(_t);
        else console.log(_t);
    }

    function setVideoPostion(_height) {
        if (_height < 300) {
            setTimeout(function() {
                setVideoPostion(_video.clientHeight);
            }, 500);
        } else {
            var _h = $(window).height();
            var _top = (_h - _height);
            $("#video").css("margin-top", _top);
        }
    }


    function addVideoEvents(_video) {
        _video.addEventListener("error", videoError, false);

        _video.addEventListener("loadstart", function() {    //客户端开始请求数据
            tyLog("loadstart");
            _skin.showWaiting();
        }, false);
        _video.addEventListener("loadedmetadata", function() {}, false);
        _video.addEventListener("loadeddata", function() {}, false);
        _video.addEventListener("waiting", function() {
            tyLog("waiting");
            _skin.showWaiting();
        }, false);
        _video.addEventListener("canplay", function() {
            tyLog("canplay")
            _skin.hideWaiting();
            if (TY.isIphone) hildPlayerBg();
            if (TY.isIphone) setVideoPostion(_video.clientHeight);
        }, false);
        _video.addEventListener("canplaythrough", function() {}, false);//可以播放，歌曲全部加载完毕
        _video.addEventListener("play", function() {
            tyLog("play");
            if (!_skin.isFirstOpen)hildPlayerBg();
            if (TY.isIphone) setVideoPostion(_video.clientHeight);
        }, false);
        _video.addEventListener("playing", function() {
            tyLog("playing");
            if (!_skin.isFirstOpen) {
                _skin.hidePause();
            }
            _skin.isFirstOpen = false;

        }, false);
        _video.addEventListener("pause", function() {
            tyLog("pause");
            _skin.showPause();
        }, false);
        _video.addEventListener("ended", function() {
            tyLog("ended");
            _skin.seek(0);
            _TYplayer.dispatchEvent("VidoeEnd", _TYplayer);
        }, false);
        _video.addEventListener("progress", function() {}, false);
        _video.addEventListener("suspend", function() {}, false);//延迟下载
        _video.addEventListener("abort", function() {}, false);//客户端主动终止下载（不是因为错误引起）
        _video.addEventListener("stalled", function() { //网速失速
            tyLog("stalled")
        }, false);

        _video.addEventListener("seeking", function() {
            tyLog("seeking")
        }, false);
        _video.addEventListener("seeked", function() {}, false);
        _video.addEventListener("ratechange", function() {}, false);//播放速率改变
        _video.addEventListener("durationchange", function() {}, false);//资源长度改变
        _video.addEventListener("volumechange", function() {}, false);//音量改变
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

        _TYplayer.dispatchEvent("VidoeError", err);

        _skin.showWarning();
        _skin.showWarning();
    }

    function update_time() {
        _skin.updateBar();
    }
};


TY.TYplayer.prototype = {
    constructor: TY.TYplayer,
    removeThis: function() {
        document.addEventListener("touchmove", function(e) {});
        _skin.removeThis();
        _video.remove();
        var videoBox = _dom.get(0)
        var _num = videoBox.childNodes.length;
        for (var i = 0; i < _num; ++i) {
            videoBox.removeChild(videoBox.childNodes[0]);
        }
    }
};
TY.extend(TY.TYplayer.prototype, TY.EventDispatcher.prototype);