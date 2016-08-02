var SpaceShip = (function () {

	var ctor = function(position){
		var self = this;
        self.constructor.super.call(this,
            GameObject.Type.SpaceShip, position, 3, 2);
		self.gameObject = new GameObject(GameObject.Type.SpaceShip,position, 3, 2);
		self.setAlignment(new Vector2D(1,0));

		self.shoots = function () {
			var X = self.gameObject.getPosition().X + self.getWidth();
			var Y = self.gameObject.getPosition().Y + (self.getHeight()/2);
			var projectile = new Projectile(new Vector2D(X, Y), self.getAlignment());
			game.addGameObject(projectile);
		};
	};

	inherit(ctor, GameObject);
	return ctor;
})();