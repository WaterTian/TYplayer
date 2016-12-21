/**
 * @author waterTian
 */

TY.TYskin = function(_v, _d, _l) {
	_TYskin = this;

	var _video = _v;
	var _dom = _d;
	_isLive = _l;


	_dom.append(TY.templates.replay);

	pause = $(".h5_player_pause");
	waiting = $(".h5_player_waiting");
	warning = $(".h5_player_warning");
	tip_btn = $(".h5_player_tip_btn");
	process_bar = $(".h5_player_process_bar");

	tip_btn.height(tip_btn.height() - 80);
	pause.css("top", (tip_btn.height() + 40) / 2);
	waiting.css("top", (tip_btn.height() + 40) / 2);
	warning.css("top", (tip_btn.height() + 40) / 2);


	process_bar.css({
		width: $(window).width() - 40,
		left: 20
	});
	process_bar.find(".process_bg").css("width", process_bar.width());
	process_bar.find(".process_line").css("width", 0);

	_dom.append(TY.templates.svg_template);


	if (_isLive) {
		document.querySelector(".h5_player_pause").addEventListener("touchend", function(e) {
			e.stopPropagation();
			_video.play();
		});
		process_bar.hide();
	} else {
		addEvents();
	}


	function addEvents() {
		var btn = document.querySelector(".h5_player_tip_btn");
		btn.addEventListener("touchstart", tipTouchstart);
		btn.addEventListener("touchmove", tipTouchmove);
		btn.addEventListener("touchend", tipTouchend);

		document.querySelector(".h5_player_pause").addEventListener("touchend", function(e) {
			e.stopPropagation();
			_video.paused ? _video.play() : _video.pause();
		});

		document.querySelector(".process_btn").addEventListener("touchstart", processTouchstart);
		document.querySelector(".process_btn").addEventListener("touchmove", processTouchmove);
		document.querySelector(".process_btn").addEventListener("touchend", processTouchend);
		document.querySelector(".h5_player_process_bar").addEventListener("touchstart", barTouchstart);
		document.querySelector(".h5_player_process_bar").addEventListener("touchmove", barTouchmove);
		document.querySelector(".h5_player_process_bar").addEventListener("touchend", barTouchend);
	}

	var _sy, _my;

	function tipTouchstart(e) {
		e.stopPropagation();
		_sy = e.touches[0].pageY;
	}

	function tipTouchmove(e) {
		e.stopPropagation();
		_my = e.touches[0].pageY;
	}

	function tipTouchend(e) {
		e.stopPropagation();
		(Math.abs(Math.abs(_my) - Math.abs(_sy)) <= 5 || 0 == _my) ?
		(_video.paused ? _video.play() : _video.pause()) :
		((process_bar.css("display") == "none") ? _TYskin.showProcessBar() : _TYskin.hideProcessBar());
		_sy = 0;
		_my = 0;
	}


	var l;
	isProcessing = 0;

	function processTouchstart(e) {
		e.stopPropagation();
		isProcessing = 1;
	}

	function processTouchmove(e) {
		e.stopPropagation();
		isProcessing = 1;

		var t = $(".process_btn"),
			i = $(".h5_player_process_bar"),
			n = e.touches[0].pageX - parseInt(i.css("left")) - parseInt(t.width()) / 4;
		0 > n ? n = 0 : n > i.width() - t.width() + parseInt(t.width()) / 2 && (n = i.width() - t.width() + parseInt(t.width()) / 2);
		l = n;
		setProcess(n);
		// $(".h5_player_process_forward_wrap").show();
		// $(".h5_player_process_forward").show();
		// var _duration = parseInt(o.get_attributes("duration")),
		//     s = _duration * n / parseInt($(".process_bg").width());
		// $(".h5_player_process_forward .time").html(a.format_time(s));
	}

	function processTouchend(e) {
		e.stopPropagation();
		isProcessing = 0;
		// $(".h5_player_process_forward_wrap").hide();
		// $(".h5_player_process_forward").hide();
		var t = parseInt(_video.duration),
			n = t * l / parseInt($(".process_bg").width());
		seek(n);
	}

	var _bar_x;

	function barTouchstart(e) {
		_bar_x = e.touches[0].pageX;
	}

	function barTouchmove(e) {
		_bar_x = e.touches[0].pageX;
	}

	function barTouchend(e) {
		var t = $(".process_btn"),
			i = $(".h5_player_process_bar"),
			n = _bar_x - parseInt(i.css("left")) - parseInt(t.width()) / 4;
		0 > n ? n = 0 : n > i.width() - t.width() + parseInt(t.width()) / 2 && (n = i.width() - t.width() + parseInt(t.width()) / 2);
		setProcess(n);
		var r = parseInt(_video.duration),
			s = r * n / parseInt($(".process_bg").width() - t.width() + parseInt(t.width()) / 2);
		seek(s);
		_bar_x = 0;
	}

	setProcess = function(e) {
		$(".process_line").css({
			width: e + 10
		}), $(".process_btn").css({
			left: e
		})
	}

	seek = function(e) {
		_video.currentTime = e
	}

	hide_icon = function() {
		pause.hide();
		waiting.hide();
		warning.hide();
		tip_btn.css("margin-left", "-1px")
	}

};
TY.TYskin.prototype = {
	constructor: TY.TYskin,
	isFirstOpen: true,
	showPause: function() {
		if (isProcessing) return !1;
		pause.show();
		pause.css("opacity", 1);
		pause.css("transform", 'scale(.1,.1)');
		pause.animate({
			transform: 'scale(1,1)'
		}, 100, 'ease-out')
	},
	hidePause: function() {
		pause.animate({
			opacity: 0,
			transform: 'scale(2,2)'
		}, 100, 'ease-out', function() {
			pause.hide();
		})
	},
	showProcessBar: function() {
		process_bar.show();
		_TYskin.updateBar();
		process_bar.animate({
			transform: 'translate(0px,0px)'
		}, 200, 'ease-out')
	},
	hideProcessBar: function() {
		process_bar.animate({
			transform: 'translate(0px,60px)'
		}, 200, 'ease-out', function() {
			process_bar.hide();
		})
	},
	updateBar: function() {
		if (_isLive) return !1;
		if (isProcessing) return !1;
		var e = parseInt(_video.duration),
			t = parseInt(_video.currentTime),
			n = ($(".process_btn"), parseInt($(".process_bg").width() - $(".process_btn").width() / 2 + 12) * t / e);
		setProcess(n);
	},
	showWaiting: function() {
		if (isProcessing) return !1;
		hide_icon();
		waiting.show();
	},
	showWarning: function() {
		if (isProcessing) return !1;
		hide_icon();
		warning.show();
	},
	removeThis: function() {

	}
};
TY.extend(TY.TYskin.prototype, TY.EventDispatcher.prototype);