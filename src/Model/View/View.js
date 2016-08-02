function View(config){
	var self = this;
	self.config = config;
	self.canvas;
	self.context;
	self.background = true;

	self.loadDOM = function (placeholder) {
		var canvas = document.createElement("canvas");
		canvas.width  = self.config.grid.width*self.config.fieldSize;
		canvas.height = self.config.grid.height*self.config.fieldSize;
		canvas.classList.add("scene");
		self.canvas = canvas;
		self.context = canvas.getContext("2d");

		var placeholderDOM = document.getElementById(placeholder);
		var parent = placeholderDOM.parentNode;
		parent.removeChild(placeholderDOM);
		parent.appendChild(canvas);
	};

	self.render = function(gameObjects){
		self.context.clearRect(0,0,self.canvas.width, self.canvas.height);
		self.drawBackground();
		self.drawObjects(gameObjects);
	};
	self.drawBackground = function () {
		self.context.fillStyle = "#000000";
		var size = 2;
		for(var y = 0;y < self.config.grid.height;y++){
			for(var x = 0;x < self.config.grid.width;x++){
				var posX = x*self.config.fieldSize+(self.config.fieldSize/2);
				var posY = y*self.config.fieldSize+(self.config.fieldSize/2);
				self.context.fillRect(posX, posY, size, size);
			}
		}

	};
	self.drawObjects = function(gameObjects){
		for(var object of gameObjects){
			if (GameObject.Type.SpaceShip == object.gameObject.getType()) {
				self.drawSpaceShip(object);
			} else if (GameObject.Type.Projectile == object.gameObject.getType()) {
				self.drawProjectile(object);
			}
		}
	};

	self.drawSpaceShip = function(spaceShip){
		var x = (spaceShip.gameObject.getPosition().X-1)*self.config.fieldSize;
		var y = (spaceShip.gameObject.getPosition().Y-1)*self.config.fieldSize;
		var width = self.config.fieldSize*spaceShip.getWidth();
		var height = self.config.fieldSize*spaceShip.getHeight();
		self.context.fillStyle = "#ff0000";
		self.context.fillRect(x, y, width, height);
	};
	self.drawProjectile = function(projectile){
		var x = (projectile.gameObject.getPosition().X-1)*self.config.fieldSize;
		var y = (projectile.gameObject.getPosition().Y-1)*self.config.fieldSize;
		var width = self.config.fieldSize*projectile.getWidth();
		var height = self.config.fieldSize*projectile.getHeight();
		self.context.fillStyle = "#0000ff";
		self.context.fillRect(x, y, width, height);
	};
}
