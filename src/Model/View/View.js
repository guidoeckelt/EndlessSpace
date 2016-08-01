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
			if(object.gameObject.type == "SpaceShip"){
				self.drawSpaceShip(object);
			}else if(object.gameObject.type == "Projectile"){
				self.drawProjectile(object);
			}
		}
	};

	self.drawSpaceShip = function(spaceShip){
		var x = (spaceShip.gameObject.position.X-1)*self.config.fieldSize;
		var y = (spaceShip.gameObject.position.Y-1)*self.config.fieldSize;
		var width = self.config.fieldSize*spaceShip.gameObject.width;
		var height = self.config.fieldSize*spaceShip.gameObject.height;
		self.context.fillStyle = "#ff0000";
		self.context.fillRect(x, y, width, height);
	};
	self.drawProjectile = function(projectile){
		var x = (projectile.gameObject.position.X-1)*self.config.fieldSize;
		var y = (projectile.gameObject.position.Y-1)*self.config.fieldSize;
		var width = self.config.fieldSize*projectile.gameObject.width;
		var height = self.config.fieldSize*projectile.gameObject.height;
		self.context.fillStyle = "#0000ff";
		self.context.fillRect(x, y, width, height);
	};
}
