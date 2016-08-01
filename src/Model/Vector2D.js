function Vector2D(X, Y){
	this.X = X;
	this.Y = Y;
}

Vector2D.prototype.add = function(other){
	return new Vector2D(this.X+other.X, this.Y+other.Y);
};

Vector2D.prototype.substract = function(other){
	return new Vector2D(this.X-other.X, this.Y+other.Y);
};

Vector2D.prototype.normalize = function(){
	var length = Math.sqrt(Math.pow(this.X,2)+Math.pow(this.Y,2));
	return new Vector2D(this.X/length, this.Y/length);
};