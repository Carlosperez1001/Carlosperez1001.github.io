var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var mouse = {
	x:undefined,
	y:undefined
}
var maxRadius = 80;
var minRadius = 20;
var colorArray= [
	'#2E0927',
	'#D90000',
	'#FF2D00',
	'#FF8C00',
	'#04756F',
];
//Mouse Tracker//
window.addEventListener('mousemove', function(event){	
	mouse.x= event.x;
	mouse.y= event.y;
	console.log(mouse);
})
//Window resize//
window.addEventListener('resize',function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});
//Creating Circle Props//
function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius, Math.PI*2,false);	
		c.fillStyle=this.color;
		c.fill();
	}
	//Moveent / Bounce //
	this.update = function(){
		if (this.x+this.radius > innerWidth || this.x-this.radius < 0){
		this.dx= -this.dx;
		}
		if (this.y+this.radius > innerHeight || this.y-this.radius < 0){
		this.dy= -this.dy;
		}
		this.x +=this.dx;
		this.y+=this.dy;
		
	if(mouse.x- this.x<100&& mouse.x - this.x > -100 && mouse.y- this.y<100&& mouse.y - this.y > -100){
		if (this.radius<maxRadius)
			this.radius +=1;
		}
	else  if (this.radius >this.minRadius){
			this.radius -=1;		
		}
	this.draw();
		}		
}

//Circle Draw command//
var circleArray=[];
for(var i=0;i < 500; i++){
	var radius = Math.random()*14+5;
	var x = Math.random()*(innerWidth-radius*2)+radius;
	var y = Math.random()*(innerHeight-radius*2)+radius;
	var dx = (Math.random()-0.5)*8;
	var dy = (Math.random()-0.5)*8;
	circleArray.push(new Circle(x,y,dx,dy,radius));
}

function init(){
	circleArray=[];

for(var i=0;i < 500; i++){
	
	var radius = Math.random()*14+1;
	var x = Math.random()*(innerWidth-radius*2)+radius;
	var y = Math.random()*(innerHeight-radius*2)+radius;
	var dx = (Math.random()-0.5)*10;
	var dy = (Math.random()-0.5)*10;
	circleArray.push(new Circle(x,y,dx,dy,radius));
}
}


//Circle Animation//
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	for (var i=0; i< circleArray.length; i++){
		circleArray[i].update();
	}
}
animate();
