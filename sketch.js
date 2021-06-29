
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3; 
var cradle,cradle1,cradle2
var ground;
var rope1,rope2,rope3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	cradle = new Cradle(400,350,100,10);
	bob1 = new Bob(100,200,30);
	ground = new Cradle(400,700,1000,10);
	rope1 = new Rope(bob1.body,cradle.body,40,0);
	bob2 = new Bob(100,200,30);
	rope2 = new Rope(bob2.body,cradle.body,5,0);
	bob3 = new Bob(100,200,30);
	rope3 = new Rope(bob3.body,cradle.body,-40,0);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  cradle.display();
  bob1.display();
  ground.display();
  rope1.display();
  bob2.display();
  bob3.display();
  rope2.display();
  rope3.display();


 
}



