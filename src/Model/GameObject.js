var GameObject = (function(){

	var ctor = function (type, position, width, height) {
		var self = this;
		self.type = type;
		self.position = position;
		self.width = width;
		self.height = height;

	};

	ctor.Type = { SpaceShip : "SpaceShip",Projectile:"Projectile"};

	ctor.prototype = {
		move : function(movingDirection){
			var dummyGameObject = this.clone(movingDirection);
			if(dummyGameObject.position.X < 1||dummyGameObject.position.X+dummyGameObject.width-1 > config.grid.width){
				return false;
			}
			if(dummyGameObject.position.Y < 1||dummyGameObject.position.Y+dummyGameObject.height-1 > config.grid.height){
				return false;
			}
			this.position = this.position.add(movingDirection);
			return true;
		},
		clone : function(movingDirection){
			var newGameObject = new GameObject(this.type, this.position, this.width, this.height);
			if(movingDirection){
				newGameObject.position = newGameObject.position.add(movingDirection);
			}
			return newGameObject;
		}
	};
	return ctor;
})();