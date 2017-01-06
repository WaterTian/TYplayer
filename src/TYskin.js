/**
 * @author waterTian
 */

TY.TYskin = function(_v, _d, _l) {
	var scope = this;

	this._video = _v;
	this._dom = _d;
	this._isLive = _l;

	this._isProcessing = 0;
	this._isWaiting = 0;

	this._dom.append(TY.templates.replay);

	this.pause = $(".h5_player_pause");
	this.waiting = $(".h5_player_waiting");
	this.warning = $(".h5_player_warning");
	this.tip_btn = $(".h5_player_tip_btn");
	this.process_bar = $(".h5_player_process_bar");

	this.tip_btn.height(this.tip_btn.height() - 60 * TY.dpr);
	this.pause.css("top", (this.tip_btn.height() + 40 * TY.dpr) / 2);
	this.waiting.css("top", (this.tip_btn.height() + 40 * TY.dpr) / 2);
	this.warning.css("top", (this.tip_btn.height() + 40 * TY.dpr) / 2);

	this.process_bar.css({
		width: $(window).width() - (40 * TY.dpr),
		height: 20 * TY.dpr,
		left: 20 * TY.dpr,
		bottom: 25 * TY.dpr
	});

	this.process_bar.find(".process_btn").css("transform", 'scale(' + TY.dpr + ',' + TY.dpr + ')');
	this.process_bar.find(".process_btn").css("bottom", -28 - (TY.dpr - 1) * 8);
	this.process_bar.find(".process_bg").css("transform", 'scaleY(' + TY.dpr + ')');
	this.process_bar.find(".process_line").css("transform", 'scaleY(' + TY.dpr + ')');

	this.process_bar.find(".process_bg").css("width", this.process_bar.width());
	this.process_bar.find(".process_line").css("width", 0);

	$(".h5_player_process_forward").css("transform", 'scale(' + TY.dpr + ',' + TY.dpr + ')');

	this._dom.append(TY.templates.svg_template);


	var addEvents = function() {
		var btn = document.querySelector(".h5_player_tip_btn");
		btn.addEventListener("touchstart", tipTouchstart);
		btn.addEventListener("touchmove", tipTouchmove);
		btn.addEventListener("touchend", tipTouchend);

		document.querySelector(".h5_player_pause").addEventListener("touchend", function(e) {
			e.stopPropagation();
			scope._video.paused ? scope._video.play() : scope._video.pause();
		});

		document.querySelector(".process_btn").addEventListener("touchstart", processTouchstart);
		document.querySelector(".process_btn").addEventListener("touchmove", processTouchmove);
		document.querySelector(".process_btn").addEventListener("touchend", processTouchend);
		document.querySelector(".h5_player_process_bar").addEventListener("touchstart", barTouchstart);
		document.querySelector(".h5_player_process_bar").addEventListener("touchmove", barTouchmove);
		document.querySelector(".h5_player_process_bar").addEventListener("touchend", barTouchend);
	}

	var _sy = 0,
		_my = 0;
	var tipTouchstart = function(e) {
		e.stopPropagation(); //不再派发事件
		_sy = e.touches[0].pageY;
	}

	var tipTouchmove = function(e) {
		e.preventDefault(); //取消事件的默认动作
		e.stopPropagation(); //不再派发事件
		_my = e.touches[0].pageY;
	}

	var tipTouchend = function(e) {
		e.stopPropagation(); //不再派发事件
		(Math.abs(Math.abs(_my) - Math.abs(_sy)) <= 5 || 0 == _my) ?
		(scope._video.paused ? scope._video.play() : scope._video.pause()) :
		((scope.process_bar.css("display") == "none") ? scope.showProcessBar() : scope.hideProcessBar());
		_sy = 0;
		_my = 0;

		scope.dispatchEvent("VidoeClick", scope);
	}


	var l;
	var forwardNum;

	var processTouchstart = function(e) {
		e.stopPropagation();
		scope._isProcessing = 1;
	}

	var processTouchmove = function(e) {
		e.preventDefault(); //取消事件的默认动作
		e.stopPropagation(); //不再派发事件
		scope._isProcessing = 1;

		var t = $(".process_btn"),
			i = $(".h5_player_process_bar"),
			n = e.touches[0].pageX - parseInt(i.css("left")) - parseInt(t.width()) / 4;
		0 > n ? n = 0 : n > i.width() - t.width() + parseInt(t.width()) / 2 && (n = i.width() - t.width() + parseInt(t.width()) / 2);
		l = n;
		scope.setProcess(n);

		//forward div
		$(".h5_player_process_forward").show();
		var _duration = parseInt(scope._video.duration);
		var s = _duration * n / parseInt($(".process_bg").width());
		$(".h5_player_process_forward .time").html(TY.formatTime(s));
		if (s > forwardNum) $(".h5_player_process_forward .forward").css("transform", 'rotate(0deg)');
		if (s < forwardNum) $(".h5_player_process_forward .forward").css("transform", 'rotate(180deg)');
		forwardNum = s;
	}

	var processTouchend = function(e) {
		e.stopPropagation();
		scope._isProcessing = 0;
		$(".h5_player_process_forward").hide();
		var t = parseInt(scope._video.duration),
			n = t * l / parseInt($(".process_bg").width());
		scope.seek(n);
	}

	var _bar_x;
	var barTouchstart = function(e) {
		_bar_x = e.touches[0].pageX;
	}

	var barTouchmove = function(e) {
		e.preventDefault(); //取消事件的默认动作
		e.stopPropagation(); //不再派发事件
		_bar_x = e.touches[0].pageX;
	}

	var barTouchend = function(e) {
		var t = $(".process_btn"),
			i = $(".h5_player_process_bar"),
			n = _bar_x - parseInt(i.css("left")) - parseInt(t.width()) / 4;
		0 > n ? n = 0 : n > i.width() - t.width() + parseInt(t.width()) / 2 && (n = i.width() - t.width() + parseInt(t.width()) / 2);
		scope.setProcess(n);
		var r = parseInt(scope._video.duration),
			s = r * n / parseInt($(".process_bg").width() - t.width() + parseInt(t.width()) / 2);
		scope.seek(s);
		_bar_x = 0;
	}


	if (this._isLive) {
		document.querySelector(".h5_player_tip_btn").addEventListener("touchmove", function(e) {
			e.preventDefault(); //取消事件的默认动作
			e.stopPropagation(); //不再派发事件
		});
		document.querySelector(".h5_player_tip_btn").addEventListener("touchend", function(e) {
			e.stopPropagation(); //不再派发事件
			if (scope._video.paused) scope._video.play();
			scope.dispatchEvent("VidoeClick", scope);
		});
		document.querySelector(".h5_player_pause").addEventListener("touchend", function(e) {
			e.stopPropagation(); //不再派发事件
			scope._video.play();
		});
		this.process_bar.hide();
	} else {
		addEvents();
	}

};
TY.TYskin.prototype = {
	constructor: TY.TYskin,
	isFirstOpen: true,
	showPause: function() {
		if (this._isProcessing) return !1;
		if (this._isWaiting) return !1;
		this.pause.show();
		this.pause.css("opacity", 0);
		this.pause.css("transform", 'scale(.1,.1)');
		this.pause.animate({
			opacity: 1,
			transform: 'scale(' + TY.dpr + ',' + TY.dpr + ')'
		}, 100, 'ease-out')
	},
	hidePause: function() {
		var scope = this;
		this.pause.animate({
			opacity: 0,
			transform: 'scale(' + 2 * TY.dpr + ',' + 2 * TY.dpr + ')'
		}, 100, 'ease-out', function() {
			scope.pause.hide();
		})
	},
	showProcessBar: function() {
		this.process_bar.show();
		this.updateBar();
		this.process_bar.animate({
			transform: 'translate(0px,0px)'
		}, 200, 'ease-out')
	},
	hideProcessBar: function() {
		var scope = this;
		this.process_bar.animate({
			transform: 'translate(0px,' + 80 * TY.dpr + 'px)'
		}, 200, 'ease-out', function() {
			scope.process_bar.hide();
		})
	},

	hide_icon: function() {
		this.hidePause();
		this.waiting.hide();
		this.warning.hide();
		this.tip_btn.css("margin-left", "-1px")
	},
	updateBar: function() {
		if (this._isLive) return !1;
		if (this._isProcessing) return !1;
		var e = parseInt(this._video.duration),
			t = parseInt(this._video.currentTime),
			n = parseInt($(".process_bg").width() - $(".process_btn").width() / 2 + 12) * t / e;
		this.setProcess(n);
	},
	setProcess: function(e) {
		$(".process_line").css({
			width: e + 10
		}), $(".process_btn").css({
			left: e
		})
	},
	seek: function(e) {
		this._video.currentTime = e
	},
	showWaiting: function() {
		if (this._isProcessing) return !1;
		this.hide_icon();
		this._isWaiting = 1;
		this.waiting.show();
		this.waiting.css("opacity", 0);
		this.waiting.css("transform", 'scale(.1,.1)');
		this.waiting.animate({
			opacity: 1,
			transform: 'scale(' + TY.dpr + ',' + TY.dpr + ')'
		}, 100, 'ease-out')
	},
	hideWaiting: function() {
		var scope = this;
		this._isWaiting = 0;
		this.waiting.animate({
			opacity: 0,
			transform: 'scale(' + 2 * TY.dpr + ',' + 2 * TY.dpr + ')'
		}, 100, 'ease-out', function() {
			scope.waiting.hide();
		})
	},

	showWarning: function() {
		if (this._isProcessing) return !1;
		this.hide_icon();
		this.warning.show();
		this.warning.css("opacity", 0);
		this.warning.css("transform", 'scale(.1,.1)');
		this.warning.animate({
			opacity: 1,
			transform: 'scale(' + TY.dpr + ',' + TY.dpr + ')'
		}, 100, 'ease-out')
	},
	removeThis: function() {

	}
};
TY.extend(TY.TYskin.prototype, TY.EventDispatcher.prototype);