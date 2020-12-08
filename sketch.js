
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var engine,world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    ground=createSprite(800,660,2000,10);
	ground.shapeColor="blue";
	paper=new Paper(100,100,30);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	d1=new Dustbin(350,600,10,100); 
	d2=new Dustbin(400,650,100,10); 
	d3=new Dustbin(450,600,10,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper.display();
  d1.display();
  d2.display();
  d3.display();
  drawSprites();
 
}



