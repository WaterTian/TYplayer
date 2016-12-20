TY.Event=function(type)
{
	this.type=type;
	this.target=null;
};
TY.Event.prototype=
{
	constructor:TY.Event,
    clone:function()
    {
        return new TY.Event(this.type,this.target);
    }
};