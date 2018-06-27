let canvas;
let ctx;

let ball = new Ball(150, 150, 3, 3);

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
}

function draw() {
	// draw to the context
	// clear
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// draw the ball
	ball.draw();
}