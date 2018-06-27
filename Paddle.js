function Paddle(width) {
	this.height = 10;
	this.width = width;
	this.x = 480 - this.width / 2;
}

Paddle.prototype.move = function () {

	if ((keys["ArrowRight"] == true) && this.x < canvas.width - this.width) {
		this.x += 7;
	}
	
	if ((keys["ArrowLeft"] == true) && this.x > 0) {
		this.x -= 7;
	}
}

Paddle.prototype.draw = function () {
	ctx.fillStyle = "#0095DD";
	ctx.fillRect(this.x, canvas.height - this.height, this.width, this.height);
}
