TY.templates = {
	svg_template: '<div style="display:none"><svg><symbol id="process_bg"><line x1="0" y1="2" x2="1000" y2="2" style="stroke:#fff; stroke-width:2; fill-opacity:0.5"/></symbol><symbol id="process"><line x1="0" y1="2" x2="1000" y2="2" style="stroke:#7c85db;stroke-width:2"/></symbol><symbol id="process_btn"><circle cx="12" cy="17" r="12" style="fill:#fff; fill-opacity:0.5"/><circle cx="12" cy="17" r="6" style="fill:#fff"/></symbol><symbol id="play"><polyline class="play" points="0,0  14,9  0,18" style="stroke:#fff;fill:#fff;"/></symbol><symbol id="pause"><line class="pause" x1="2" y1="0" x2="2" y2="18" stroke="#fff" stroke-width="5" /><line class="pause" x1="11" y1="0" x2="11" y2="18" stroke="#fff" stroke-width="5" /></symbol><symbol id="control_btn_bg"><circle cx="25" cy="25" r="25" style="fill:#000; fill-opacity:0.3"/></symbol></svg></div>',

	replay: '<div class="h5_player_tip_btn" style="background-size:100% 100%;width:100%;height:100%;position:absolute;left:0;top:0;z-index:20"><div class="h5_player_pause" style="display:none;left:50%;background-image:url(./playerIcons.png);z-index:4;position:absolute;width:93px;height:93px;top:50%;margin-left:-46px;margin-top:-46px;"></div><div class="h5_player_waiting" style="display:none;left:50%;background-image:url(./playerIcons.png);z-index:4;position:absolute;width:80px;height:100px;top:50%;margin-left:-40px;margin-top:-50px;background-position:left -128px"></div><div class="h5_player_warning" style="display:none;left:50%;background-image:url(./playerIcons.png);z-index:4;position:absolute;width:90px;height:90px;top:50%;margin-left:-45px;margin-top:-45px;background-position:left -254px"></div></div><div class="h5_player_process_bar" style="width:100%;height:18px;position:absolute;bottom:30px;left:0;z-index:20"><svg class="process_bg" style="position:absolute;height:10px;width:100%;left:0;bottom:0"><use xlink:href="#process_bg"/></svg><svg class="process_line" style="position:absolute;height:10px;width:100%;left:0;bottom:0"><use xlink:href="#process"/></svg><svg class="process_btn" style="position:absolute;width:44px;height:44px;bottom:-20px"><use xlink:href="#process_btn"/></svg></div>',

	liveplay: '<div class="h5_player_tip_btn"><div class="h5_player_pause" style="display:none"></div><div class="h5_player_waiting" style="display:none"></div><div class="h5_player_warning" style="display:none"></div></div><div class="h5_player_control_bar" style="display:none"><svg class="h5_player_control_btn"><polyline class="play" points="0,0  14,9  0,18"style="stroke:#444844;fill:#444844; display:none"/><line class="pause" x1="2" y1="0" x2="2" y2="18" stroke="#444844" stroke-width="5" /><line class="pause" x1="11" y1="0" x2="11" y2="18" stroke="#444844" stroke-width="5" /></svg><div class="h5_player_control_time"><span class="now">00:00</span></div></div>'
}

TY.videoUrl = "";
TY.videoDiv ='<div class="h5_player" style="width: 100%; height: 100%; margin: 0;padding: 0; border: 0;font: inherit; vertical-align: baseline;"></div>';
TY.videoTemplate = '<video id="video" autoplay=""  webkit-playsinline="true" x-webkit-airplay="true" x5-video-player-type="h5" playsinline width="100%"  preload="auto" poster="" src="' + TY.videoUrl + '" ></video>';
TY.videoBgTemplate = '<div class="h5_player_bg" style="position:absolute;width:100%;height:100%;top:0;background-position:center;background-size: cover; background-color:transparent;;background-image:url()"></div>';





TY.isAndroid = /Android/i.test(navigator.userAgent);
TY.isIphone = /iphone/i.test(navigator.userAgent);
TY.isChrome = /chrome\//i.test(navigator.userAgent);
TY.isWeixin = /MicroMessenger\//i.test(navigator.userAgent);


TY.isMobileDevice = isMobileDevice;

function isMobileDevice() {
	if (navigator === undefined || navigator.userAgent === undefined) {
		return true;
	}
	var s = navigator.userAgent;
	if (s.match(/iPhone/i) || s.match(/iPad/i) || s.match(/iPod/i) || s.match(/webOS/i) || s.match(/BlackBerry/i) || (s.match(/Windows/i) && s.match(/Phone/i)) || (s.match(/Android/i) && s.match(/Mobile/i))) {
		return true;
	}
	return false;
}


TY.cssremConfig = {
	"px_to_rem": 75,
	"max_rem_fraction_length": 6,
	"available_file_types": [".css", ".less", ".sass"]
}


/*
#video_wrap{overflow:hidden;position:absolute}
#video_wrap,#video_wrap .h5_player {width: 100%; height: 100%; margin: 0;padding: 0; border: 0;font: inherit; vertical-align: baseline;}
#video_wrap .h5_player .h5_player_bg{position:absolute;width:100%;height:100%;top:0;background-position: center center;background-size: cover; background-color:transparent;}
#video_wrap .h5_player_tip_btn{background-size:100% 100%;width:100%;height:100%;position:absolute;left:0;top:0;z-index:4}
#video_wrap .h5_player_pause,#video_wrap .h5_player_waiting,#video_wrap .h5_player_warning{left:50%;background-image:url(./playerIcons.png);z-index:4;position:absolute}
#video_wrap .h5_player_pause{width:93px;height:93px;top:50%;margin-left:-46px;margin-top:-46px;}
#video_wrap .h5_player_waiting{width:80px;height:100px;top:50%;margin-left:-40px;margin-top:-50px;background-position:left -128px}
#video_wrap .h5_player_warning{width:90px;height:90px;top:50%;margin-left:-45px;margin-top:-45px;background-position:left -254px}
#video_wrap .h5_player_process_bar,#video_wrap .h5_player_process_bar_hover{width:100%;height:18px;position:absolute;bottom:30px;left:0}
#video_wrap .h5_player_process_bar .process_bg,#video_wrap .h5_player_process_bar .process_line{position:absolute;height:10px;width:100%;left:0;bottom:0}
#video_wrap .h5_player_process_bar .process_btn{position:absolute;width:44px;height:44px;bottom:-20px}
*/