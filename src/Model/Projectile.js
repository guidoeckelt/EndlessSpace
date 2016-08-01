function Projectile(position, width, height){
	var self = this;
	self.gameObject = new GameObject("Projectile", position, width, height);
	self.alignment;
	self.direction;
}