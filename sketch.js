const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	paperObject=loadImage('paper.png');
	dustbin=loadImage('dustbingreen.png');

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  drawSprites();
 
}

function keyPressed(){
	if(KeyCode === UP_ARROW){
		Matter.Body.applyforce(paperObject.body,paperObject.body.positio,{x:85,y:-85});
	}
}

