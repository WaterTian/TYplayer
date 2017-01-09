// namespace:
this.TY = this.TY || {};

TY.VERSION = "1";
TY.Debug = 0;

TY.inherit = function(ctor, superCtor) {
	ctor.superClass = superCtor;
	ctor.prototype = Object.create(superCtor.prototype);
	ctor.prototype.constructor = ctor;
};
TY.extend = function(origin, add) {
	// Don't do anything if add isn't an object
	if (!add || typeof add !== 'object')
		return origin;
	var keys = Object.keys(add);
	var i = keys.length;
	while (i--) {
		origin[keys[i]] = add[keys[i]];
	}
	return origin;
};

TY.logBox = {};
TY.Log = function(_t) {
	if (!TY.Debug) return;
	if (TY.isWeixin) TY.logBox.innerHTML += _t + '<br>';
	else console.log(_t);
}