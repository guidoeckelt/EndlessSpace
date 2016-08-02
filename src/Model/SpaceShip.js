var SpaceShip = (function () {

	var ctor = function(position){
		var self = this;
		self.gameObject = new GameObject(GameObject.Type.SpaceShip,position, 3, 2);
		self.alignment = new Vector2D(1,0);
		self.movingDirection;

		self.shoots = function () {
			var X = self.gameObject.position.X + self.gameObject.width;
			var Y = self.gameObject.position.Y + (self.gameObject.height/2);
			var projectile = new Projectile(new Vector2D(X, Y));
			projectile.alignment = self.alignment;
			projectile.direction = self.alignment;
			game.addGameObject(projectile);
		};
	};

	// inherit(ctor, GameObject);
	return ctor;
})();