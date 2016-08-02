var Projectile = (function () {

	var ctor = function(position){
		var self = this;
		self.gameObject = new GameObject(GameObject.Type.Projectile, position, 1, 0.5);
		self.alignment;
		self.direction;
	};

	// inherit(ctor, GameObject);
	return ctor;
})();