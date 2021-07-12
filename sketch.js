
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1= new Paper (50,100,20);
ground1 = new Ground (400,380,800,20);

binSprite1=createSprite(width/1.3 ,330,20,70);
	binSprite2=createSprite(width/1.2,365,130,10);
	binSprite3=createSprite(width/1.1,330,20,70);
binSprite1.shapeColor=color(255,0,0);
binSprite2.shapeColor="red";
binSprite3.shapeColor="red";

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW ){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-65});
	}

}
