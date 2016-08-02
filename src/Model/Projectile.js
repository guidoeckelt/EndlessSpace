var Projectile = (function () {

	var ctor = function(position, directionValue){
		var self = this;
        self.constructor.super.call(this,
		    GameObject.Type.Projectile, position, 1, 0.5);
		self.gameObject = new GameObject(GameObject.Type.Projectile, position, 1, 0.5);
		self.setMovingDirection(directionValue);
		self.setAlignment(directionValue);
	};

	inherit(ctor, GameObject);
	return ctor;
})();