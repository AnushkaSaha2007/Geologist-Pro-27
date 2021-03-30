
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var sand1,sand2,sand3,sand4,sand5,sand6,iron;
var plain,rubber,hammer;

function preload()
{
	
}

function setup() {
createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	plain=new Plain(600,height,1200,15)
	hammer=new Hammer(200,200);
          stone=new Stone(700,470,80,100);
	iron=new Iron(300,470,80,50);
          rubber=new Rubber(700,370,20,10);
          sand1=new Sand(250,470);
          sand2=new Sand(270,470);
          sand3=new Sand(390,470);
          sand4=new Sand(400,470);
          sand5=new Sand(410,470);
          sand6=new Sand(280,470);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  plain.display();
  hammer.display();
  stone.display();
  iron.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  
  drawSprites();
 
}



