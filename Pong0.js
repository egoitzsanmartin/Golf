var canvas;
var ctx;
var ballX;
var ballY;
var dx;
var dy;
var ballRadius;
var lurra;
var lurra1;
var lurra2;
var lurra3;
var lurra4;
var lurra5;
var lurra6;
var pareta;
var pareta1;
var pareta2;
var pareta3;
var pareta4;
var pareta5;
var pareta6;
var imgSand;
var sandX;
var sandY;
var sandWidth;
var sandHeight;
var indarra;
var k;
var b;
var x = 20;
var dRadius;
var arriarenDef;

function hasieratu() {
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
dx = 1; //Potencia de la bola.
dy = -10; //Dirección de la bola.
k = 0.3;
b = 0.5;
ballRadius = 20;
dRadius = 0;
deltaX = 0;
indarra = 0;
sandX = 552;
sandY = 390;
sandWidth = 340;
sandHeight = 105;
lurra = 564;
lurra1 = 564;
lurra2 = 367;
lurra3 = 494 - sandHeight;
lurra4 = 370;
lurra5 = 414;
lurra6 = 204;
pareta = 391;
pareta1 = 391;
pareta2 = 552;
pareta3 = 891;
pareta4 = 1046;
pareta5 = 1142;
pareta6 = canvas.width;
ballX = ballRadius + dRadius;
ballY = lurra - (ballRadius + 5);
imgSand = new Image();
imgSand.src = 'Sand.png';
arriarenDef = 1.4;

setInterval(draw, 10);
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();
}

function drawSand() {
	ctx.beginPath();
	ctx.drawImage(imgSand, sandX, sandY);
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawSand();
	ballRadius = 20 + dRadius;
	deltaX = deltaX - dRadius;

	if (ballX > 0 && ballX < pareta1)
	{
		if (ballX + dx > pareta1 && ballY > lurra2)
		{
			dx = -dx;
		}
		if (ballX + dx > pareta1 && ballY < lurra2)
		{
			lurra = lurra2;
		}
	}

		if (ballX > pareta1 && ballX < pareta2)
		{
			if (ballY > lurra3 && ballX + dx > pareta2)
			{
				dx = -dx;
			}
			if (ballY < lurra3 && ballX + dx > pareta2)
			{
				lurra = lurra3;
			}
			if (ballY > lurra1 && ballX + dx < pareta1)
			{
				dx = -dx;
			}
			if (ballY < lurra1 && ballX + dx < pareta1)
			{
				lurra = lurra1;
			}
		}

		if (ballX > pareta2 && ballX < pareta3)
		{
			if (ballY > lurra4 && ballX + dx > pareta3)
			{
				dx = -dx;
			}
			if (ballY < lurra4 && ballX + dx > pareta3)
			{
				lurra = lurra4;
			}
			if (ballY > lurra2 && ballX + dx < pareta2)
			{
				dx = -dx;
			}
			if (ballY < lurra2 && ballX + dx < pareta2)
			{
				lurra = lurra2;
			}
		}

		if (ballX > pareta3 && ballX < pareta4)
		{
			if (ballY > lurra5 && ballX + dx > pareta4)
			{
				dx = -dx;
			}
			if (ballY < lurra5 && ballX + dx > pareta4)
			{
				lurra = lurra5;
			}
			if (ballY > lurra3 && ballX + dx < pareta3)
			{
				dx = -dx;
			}
			if (ballY < lurra3 && ballX + dx < pareta3)
			{
				lurra = lurra3;
			}
		}

		if (ballX > pareta4 && ballX < pareta5)
		{
			if (ballY > lurra6 && ballX + dx > pareta5)
			{
				dx = -dx;
			}
			if (ballY < lurra6 && ballX + dx > pareta5)
			{
				lurra = lurra6;
			}
			if (ballY > lurra4 && ballX + dx < pareta4)
			{
				dx = -dx;
			}
			if (ballY < lurra4 && ballX + dx < pareta4)
			{
				lurra = lurra4;
			}
		}

		if (ballX > pareta5 && ballX < pareta6)
		{
			if (ballY > lurra5 && ballX + dx < pareta4)
			{
				dx = -dx;
			}
			if (ballY < lurra5 && ballX + dx < pareta4)
			{
				lurra = lurra5;
			}
		}

	if (ballX + dx > canvas.width - ballRadius) {
			dx = -dx;
			dy = dy;
		}
	if (ballX + dx < ballRadius) {
			dx = -dx;
			dy = dy;
	}

	if (ballY + dy > lurra) {
		dy = -dy / 2;
		dx = dx / 2;
		ballRadius = ballRadius - 5;
		deltaX = 1;
	}

		if(dx != 0)
		{
			ballX = ballX + dx;
			ballY = ballY + dy;
			indarra = -k * deltaX -b * dy;

			dRadius = (dRadius - indarra) / arriarenDef;

			dy += 0.1;
		}
}
