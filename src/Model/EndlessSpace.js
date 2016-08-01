function EndlessSpace(config){
	var self = this;
	self.config = config;
	self.view = new View(config);
	self.keybinder = new KeyBinder();
	var midY = this.config.grid.height/2;
	self.spaceship= new SpaceShip(new Vector2D(1, midY),3 ,2);
	self.gameObjects = new Array();
	self.gameObjects.push(this.spaceship);

	self.start = function () {
		window.setTimeout(function () { self.gameLoop(); },self.config.delay);
		//window.requestAnimationFrame(function(){ self.gameLoop(); });
	};
	self.stop = function () {

	};
	self.pause = function () {

	};
	self.restart = function () {

	};

	self.gameLoop = function (timeStamp) {
		self.moveGameObjects();
		if(self.keybinder.actionsTriggered[self.config.shoot] == true){
			self.spaceship.shoots();
		}

		self.view.render(self.gameObjects);
		window.setTimeout(function () { self.gameLoop(); },self.config.delay);
		//window.requestAnimationFrame(function(){ self.gameLoop(); });
	};

	self.moveGameObjects = function () {
		for(var i = 0;i < self.gameObjects.length;i++){
			var gameObject = self.gameObjects[i];
			if(gameObject.gameObject.type == "SpaceShip"){
				if(self.keybinder.actionsTriggered[self.config.moveLeft[0]] == true
					||self.keybinder.actionsTriggered[self.config.moveLeft[1]] == true){
					self.spaceship.gameObject.move(new Vector2D(-1,0));
				}
				if(self.keybinder.actionsTriggered[self.config.moveTop[0]] == true
					||self.keybinder.actionsTriggered[self.config.moveTop[1]] == true){
					self.spaceship.gameObject.move(new Vector2D(0, -1));
				}
				if(self.keybinder.actionsTriggered[self.config.moveRight[0]] == true
					||self.keybinder.actionsTriggered[self.config.moveRight[1]] == true){
					self.spaceship.gameObject.move(new Vector2D(1,0));
				}
				if(self.keybinder.actionsTriggered[self.config.moveBottom[0]] == true
					||self.keybinder.actionsTriggered[self.config.moveBottom[1]] == true){
					self.spaceship.gameObject.move(new Vector2D(0, 1));
				}
			}else if(gameObject.gameObject.type == "Projectile"){
				if(gameObject.gameObject.move(gameObject.direction) == false){
					self.gameObjects.splice(self.gameObjects.indexOf(gameObject),1);
				}
			}
		}
	};

	self.addGameObject = function(gameObject){
		self.gameObjects.push(gameObject);
	}

}
function Config(){
	this.grid = {width:	100, height: 60}
	this.fieldSize = 10;
	this.moveLeft 	= [37,  97];
	this.moveRight 	= [39, 100];
	this.moveTop 	= [38, 119];
	this.moveBottom = [40, 115];
	this.shoot 		= 32;
	this.rotateClockwise = 32;
	this.delay = 10;
	
}
//============INIT============
var game, config;
$(function(){

	config = new Config();
	game = new EndlessSpace(config);
	game.view.loadDOM("scenePlaceholder");

	document.addEventListener("keypress",game.keybinder.OnKeyPress);
	document.addEventListener("keyup",game.keybinder.OnKeyUp);

	game.start();

});
//============================