function GameObject(type, position, width, height){
	var self = this;
	self.type = type;
	self.position = position;
	self.width = width;
	self.height = height;

	self.move = function (movingDirection) {
		var dummyGameObject = self.clone(movingDirection);
		if(dummyGameObject.position.X < 1||dummyGameObject.position.X+dummyGameObject.width-1 > config.grid.width){
			return false;
		}
		if(dummyGameObject.position.Y < 1||dummyGameObject.position.Y+dummyGameObject.height-1 > config.grid.height){
			return false;
		}
		self.position = self.position.add(movingDirection);
		return true;
	};

	self.clone = function(movingDirection){
		var newGameObject =new GameObject(self.type, self.position, self.width, self.height);
		if(movingDirection){
			newGameObject.position = newGameObject.position.add(movingDirection);
		}
		return newGameObject;
	};

}