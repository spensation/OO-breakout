function Ball(x, y, velX, velY) {
	this.x = x;
	this.y = y;
	this.radius = 10;
	this.velX = velX;
	this.velY = velY
}

Ball.prototype.move = function () {
	// Bounce off the sides
	if (this.x > canvas.width - this.radius || this.x < this.radius) {
		this.velX = -(this.velX);		
	}
	// Bounce off the ceiling
	if (this.y < this.radius) {
		this.velY = -(this.velY);
	}
	// Don't bounce off the floor unless it touches the paddle
	
	// if (this.y > canvas.height - this.radius) {
	// 	this.velY = -(this.velY);
	// }

	this.x += this.velX;
	this.y += -(this.velY);	
}

Ball.prototype.draw = function () {
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();

	
}
