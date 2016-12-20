TY.EventDispatcher = function(){};
TY.EventDispatcher.prototype = 
{
	constructor : TY.EventDispatcher,
	apply: function ( object ) 
	{
		object.addEventListener = TY.EventDispatcher.prototype.addEventListener;
		object.removeEventListener = TY.EventDispatcher.prototype.removeEventListener;
        object.removeAllEventListeners = TY.EventDispatcher.prototype.removeAllEventListeners;
		object.dispatchEvent =TY.EventDispatcher.prototype.dispatchEvent;
		object.on=TY.EventDispatcher.prototype.addEventListener;
		object.once=TY.EventDispatcher.prototype.once;
	},
	addEventListener : function(type, listener)
	{
		if (this._listeners === undefined)
			this._listeners = {};
		var listeners = this._listeners;
		if (listeners[type] === undefined)
		{
			listeners[type] = [];
		}
		if (listeners[type].indexOf(listener) === -1)
		{
			listeners[type].push(listener);
		}
	},
	dispatchEvent : function(event)
	{
		if (this._listeners === undefined) return;
		var listeners = this._listeners;
		var listenerArray = listeners[event.type];
		if (listenerArray == undefined) return;
		event.target = this;
		var array = listenerArray.slice();
		for ( var i = 0, l = array.length; i < l; i++)
		{
			array[i].call(this, event);
		}
	},
	removeEventListener : function(type, listener)
	{
		if (this._listeners === undefined)
			return;
		var listeners = this._listeners;
		var index = listeners[type].indexOf(listener);
		if (index !== -1)
		{
			listeners[type].splice(index, 1);
		}
	},
	removeAllEventListeners:function()
	{
		if (this._listeners === undefined) return;
		var listeners = this._listeners;
		for ( var prop in listeners)
		{
			delete listeners[prop];
		}
	}
};
TY.EventDispatcher.prototype.on=TY.EventDispatcher.prototype.addEventListener;
TY.EventDispatcher.prototype.once=function(type, listener) 
{
	  function g(event) 
	  {
		   //event.target.removeEventListener(type, g);
		   this.removeEventListener(type, g);
		   listener.call(this, event);
	  }
	  this.addEventListener(type, g);
};


