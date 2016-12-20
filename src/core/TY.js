// namespace:
this.TY = this.TY || {};

TY.VERSION = "0";

TY.Debug = 1;


TY.templates = {
	svg_template: '<div style="display:none"><svg><symbol id="process_bg"><line x1="0" y1="2" x2="1000" y2="2" style="stroke:#fff; stroke-width:2; fill-opacity:0.5"/></symbol><symbol id="process"><line x1="0" y1="2" x2="1000" y2="2" style="stroke:#b163ff;stroke-width:2"/></symbol><symbol id="process_btn"><circle cx="12" cy="17" r="12" style="fill:#fff; fill-opacity:0.5"/><circle cx="12" cy="17" r="6" style="fill:#fff"/></symbol><symbol id="play"><polyline class="play" points="0,0  14,9  0,18" style="stroke:#fff;fill:#fff;"/></symbol><symbol id="pause"><line class="pause" x1="2" y1="0" x2="2" y2="18" stroke="#fff" stroke-width="5" /><line class="pause" x1="11" y1="0" x2="11" y2="18" stroke="#fff" stroke-width="5" /></symbol><symbol id="control_btn_bg"><circle cx="25" cy="25" r="25" style="fill:#000; fill-opacity:0.3"/></symbol></svg></div>',

	replay: '<div class="h5_player_tip_btn"><div class="h5_player_pause" style="display:none"></div><div class="h5_player_waiting" style="display:none"></div><div class="h5_player_warning" style="display:none"></div></div><div class="h5_player_process_bar"><svg class="process_bg"><use xlink:href="#process_bg"/></svg><svg class="process_line"><use xlink:href="#process"/></svg><svg class="process_btn"><use xlink:href="#process_btn"/></svg></div>',

	liveplay: '<div class="h5_player_tip_btn"><div class="h5_player_pause" style="display:none"></div><div class="h5_player_waiting" style="display:none"></div><div class="h5_player_warning" style="display:none"></div></div><div class="h5_player_control_bar" style="display:none"><svg class="h5_player_control_btn"><polyline class="play" points="0,0  14,9  0,18"style="stroke:#444844;fill:#444844; display:none"/><line class="pause" x1="2" y1="0" x2="2" y2="18" stroke="#444844" stroke-width="5" /><line class="pause" x1="11" y1="0" x2="11" y2="18" stroke="#444844" stroke-width="5" /></svg><div class="h5_player_control_time"><span class="now">00:00</span></div></div>',

	mp4: '<div class="h5_player_tip_btn"><div class="h5_player_pause" style="display:none"></div><div class="h5_player_waiting" style="display:none"></div><div class="h5_player_warning" style="display:none"></div></div><div class="h5_player_control_btn"><svg class="control_btn_bg"><use xlink:href="#control_btn_bg"/></svg><svg class="play"><use xlink:href="#play"/></svg><svg class="pause"><use xlink:href="#pause"/></svg></div><div class="h5_player_control_time"><span class="now">00:00:00</span></div><div class="h5_player_process_bar"><svg class="process_bg"><use xlink:href="#process_bg"/></svg><svg class="process_line"><use xlink:href="#process"/></svg><svg class="process_btn"><use xlink:href="#process_btn"/></svg></div><div class="h5_player_process_forward_wrap" style="display:none"></div><div class="h5_player_process_forward" style="display:none"><div class="img forward"></div><div class="time">00:00</div></div>'
}

TY.videoUrl = "";
TY.videoDiv ='<div class="h5_player"></div>';
TY.videoTemplate = '<video id="video" autoplay=""  webkit-playsinline="true" x-webkit-airplay="true" x5-video-player-type="h5" playsinline width="100%"  preload="auto" poster="" src="' + TY.videoUrl + '" ></video>';
TY.videoBgTemplate = '<div class="h5_player_bg"></div>';