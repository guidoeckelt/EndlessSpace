function SpaceShip(position ,width, height){
	var self = this;
	self.gameObject = new GameObject("SpaceShip",position, width, height);
	self.alignment = new Vector2D(1,0);
	self.movingDirection;

	self.shoots = function () {
		var width = 1;
		var height = 0.5;
		var X = self.gameObject.position.X + self.gameObject.width -width;
		var Y = self.gameObject.position.Y + (self.gameObject.height/2);
		var projectile = new Projectile(new Vector2D(X, Y), width, height);
		projectile.alignment = self.alignment;
		projectile.direction = self.alignment;
		game.addGameObject(projectile);
	};
}