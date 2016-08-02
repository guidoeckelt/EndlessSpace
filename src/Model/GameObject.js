var GameObject = (function(){

	var ctor = function (typeValue, positionValue, widthValue, heightValue) {
		var self = this;
		var type = typeValue;
		var position = positionValue;
		var width = widthValue;
		var height = heightValue;

		var movingDirection;
		var alignment;

		self.getType = function(){ return type; };
		self.setType = function (value) { type = value; };

		self.getPosition = function(){ return position; };
		self.setPosition = function (value) { position = value; };

		self.getWidth = function(){ return width; };
		self.setWidth = function (value) { width = value; };

		self.getHeight = function(){ return height; };
		self.setHeight = function (value) { height = value; };

		self.getMovingDirection = function(){ return movingDirection; };
		self.setMovingDirection = function (value)  { movingDirection = value; };

		self.getAlignment = function(){ return alignment; };
		self.setAlignment = function (value) { alignment = value; };

	};

	ctor.Type = { SpaceShip : "SpaceShip",Projectile:"Projectile"};

	ctor.prototype = {
		move : function(movingDirection){
			var dummyGameObject = this.clone(movingDirection);
			if(dummyGameObject.getPosition().X < 1||dummyGameObject.getPosition().X+dummyGameObject.getWidth()-1 > config.grid.width){
				return false;
			}
			if(dummyGameObject.getPosition().Y < 1||dummyGameObject.getPosition().Y+dummyGameObject.getHeight()-1 > config.grid.height){
				return false;
			}
			this.setPosition(this.getPosition().add(movingDirection));
			return true;
		},
		clone : function(movingDirection){
			var newGameObject = new GameObject(this.getType(), this.getPosition()
				, this.getWidth(), this.getHeight());
			if(movingDirection){
				var newPosition = newGameObject.getPosition().add(movingDirection);
				newGameObject.setPosition(newPosition);
			}
			return newGameObject;
		}
	};
	return ctor;
})();