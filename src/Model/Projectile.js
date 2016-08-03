var Projectile = (function () {

	var ctor = function(position, directionValue){
		var self = this;
        self.constructor.super.call(this,
		    GameObject.Type.Projectile, position, 1, 0.5);
		self.setMovingDirection(directionValue);
		self.setAlignment(directionValue);

        self.move = function(){
            var move = this.constructor.super.prototype.move;
            return move.call(this,this.getMovingDirection());
        };
	};

	inherit(ctor, GameObject);
	return ctor;
})();