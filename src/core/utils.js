TY.templates = {
	svg_template: '<div style="display:none"><svg><symbol id="process_bg"><line x1="0" y1="2" x2="2000" y2="2" style="stroke:#fff; stroke-width:2; fill-opacity:0.5"/></symbol><symbol id="process"><line x1="0" y1="2" x2="2000" y2="2" style="stroke:#7c85db;stroke-width:2"/></symbol><symbol id="process_btn"><circle cx="12" cy="12" r="12" style="fill:#fff; fill-opacity:0.5"/><circle cx="12" cy="12" r="6" style="fill:#fff"/></symbol><symbol id="play"><polyline class="play" points="0,0  14,9  0,18" style="stroke:#fff;fill:#fff;"/></symbol><symbol id="pause"><line class="pause" x1="2" y1="0" x2="2" y2="18" stroke="#fff" stroke-width="5" /><line class="pause" x1="11" y1="0" x2="11" y2="18" stroke="#fff" stroke-width="5" /></symbol><symbol id="control_btn_bg"><circle cx="25" cy="25" r="25" style="fill:#000; fill-opacity:0.3"/></symbol></svg></div>',

	replay: '<div class="h5_player_tip_btn" style="background-size:100% 100%;width:100%;height:100%;position:absolute;left:0;top:0;z-index:20"><div class="h5_player_pause" style="display:none;left:50%;background-image:url(./playerIcons.png);z-index:4;position:absolute;width:90px;height:90px;top:50%;margin-left:-45px;margin-top:-45px;"></div><div class="h5_player_waiting" style="display:none;left:50%;background-image:url(./playerIcons.png);z-index:4;position:absolute;width:90px;height:100px;top:50%;margin-left:-45px;margin-top:-50px;background-position:left -90px"></div><div class="h5_player_warning" style="display:none;left:50%;background-image:url(./playerIcons.png);z-index:4;position:absolute;width:90px;height:130px;top:50%;margin-left:-45px;margin-top:-65px;background-position:left -190px"></div></div><div class="h5_player_process_bar" style="width:100%;height:18px;position:absolute;bottom:30px;left:0;z-index:20"><svg class="process_bg" style="position:absolute;height:10px;width:100%;left:0;bottom:0"><use xlink:href="#process_bg"/></svg><svg class="process_line" style="position:absolute;height:10px;width:100%;left:0;bottom:0"><use xlink:href="#process"/></svg><svg class="process_btn" style="position:absolute;width:48px;height:48px;bottom:-28px"><use xlink:href="#process_btn"/></svg></div><div class="h5_player_process_forward" style="display:none;position:absolute;left:50%;top:65%;width:100px;height:50px;margin-top:-25px;margin-left:-50px"><div class="bg" style="filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opacity:.5;background-color:#fff;width:100px;height:50px;position:absolute;left:50%;margin-top:-22px;margin-left:-50px;border-radius:5px;-webkit-border-radius:5px;padding:20px 0 15px"></div><div class="forward" style="width:40px;height:32px;background-image:url(./playerIcons.png);background-position:left -330px;margin:0 auto"></div><div class="time" style="padding:5px;text-align:center;color:#fff;font-size:14px;font-size:14px;line-height:14px;-webkit-text-shadow:0 1px 0 #000;-moz-text-shadow:0 1px 0 #000;-ms-text-shadow:0 1px 0 #000;-o-text-shadow:0 1px 0 #000;text-shadow:0 1px 0 #000;">00:00</div></div>'

}


TY.videoUrl = "";
TY.videoDiv = '<div class="h5_player" style="width: 100%; height: 100%; margin: 0;padding: 0; border: 0;font: inherit; vertical-align: baseline;"></div>';
TY.videoTemplate = '<video id="video"  webkit-playsinline="true" x-webkit-airplay="true" x5-video-player-type="h5" playsinline width="100%"  preload="auto" poster="" src="' + TY.videoUrl + '" ></video>';
TY.videoBgTemplate = '<div class="h5_player_bg" style="position:absolute;width:100%;height:100%;top:0;background-position:center;background-size: cover; background-color:transparent;;background-image:url()"></div>';

TY.dpr = window.devicePixelRatio || 1;



TY.jsURL = function(_name) {
	var js = document.scripts;
	var jsPath;
	for (var i = js.length; i > 0; i--) {
		if (js[i - 1].src.indexOf(_name) > -1) {
			jsPath = js[i - 1].src.substring(0, js[i - 1].src.lastIndexOf("/") + 1);
		}
	}
	return jsPath;
}



TY.isAndroid = /Android/i.test(navigator.userAgent);
TY.isIphone = /iphone/i.test(navigator.userAgent);
TY.isChrome = /chrome\//i.test(navigator.userAgent);
TY.isWeixin = /MicroMessenger\//i.test(navigator.userAgent);
TY.isWeibo = /Weibo/i.test(navigator.userAgent);

TY.isMobileDevice = isMobileDevice;

function isMobileDevice() {
	var e = navigator.userAgent.toLowerCase();
	return !!/(iphone|ios|android|mini|mobile|mobi|nokia|symbian|ipod|ipad|ws\s+phone|mqqbrowser|wp7|wp8|ucbrowser7|ucweb|360\s+aphone\s+browser)/i.test(e)
}
TY.isIosDevice = function() {
	var e = navigator.userAgent.toLowerCase(),
		t = !!e.match(/\(i[^;]+;( U;)? cpu.+mac os x/),
		n = e.indexOf("iphone") > -1 || e.indexOf("Mac") > -1,
		r = e.indexOf("ipad") > -1;
	return !!(t || r || n)
}


TY.browserTypeInfo = function() {
	var t = navigator.userAgent.toLowerCase(),
		n = t.indexOf("trident") > -1,
		r = t.indexOf("presto") > -1,
		i = t.indexOf("applewebkit") > -1,
		o = t.indexOf("Gecko") > -1 && -1 === t.indexOf("KHTML"),
		a = t.indexOf("chrome") > -1,
		u = !!t.match(/\(i[^;]+;( U;)? cpu.+mac os x/),
		c = t.indexOf("android") > -1 || t.indexOf("Linux") > -1,
		l = t.indexOf("iphone") > -1 || t.indexOf("Mac") > -1,
		d = t.indexOf("ipad") > -1,
		f = -1 === t.indexOf("safari"),
		p = {
			ie: n,
			op: r,
			wk: i,
			cr: a,
			mz: o,
			io: u,
			an: c,
			ih: l,
			id: d,
			wa: f
		};
	return p;
}



TY.formatTime = function(e) {
	var t = "",
		n = parseInt(e),
		r = n % 60,
		i = parseInt(n / 60),
		o = 0;
	return i > 60 && (o = parseInt(i / 60), i = parseInt(i % 60)), 10 > i && (i = "0" + i), 10 > r && (r = "0" + r), 10 > o && (o = "0" + o), t = o + ":" + i + ":" + r
}