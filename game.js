let canvas;
let ctx;

let keys = [];

let lives = 3;

let ball = new Ball(150, 150, 3, 3);
let paddle = new Paddle(75);

window.onkeydown = function(event) {
	keys[event.key] = true;
};

window.onkeyup = function(event) {
	keys[event.key] = false;
};

function startGame() {
	canvas = document.getElementById("gc");

	ctx = canvas.getContext("2d");

	let fps = 1000 / 30;
	window.setInterval(update, fps);
}

function update() {
	// call handleLogic() && draw()
	handleLogic();
	draw();
}

function handleLogic() {
	// move the ball
	ball.move();
	paddle.move();
}

function draw() {
	// draw to the context
	// clear
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// draw the ball
	ball.draw();
	paddle.draw();

}