
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world
var bob1, bob2, bob3, bob4, bob5
var roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof(320,20,370,20)
    bob1=new Bob(200,300,50)
    bob2=new Bob(260,300,50)
    bob3=new Bob(320,300,50)
    bob4=new Bob(380,300,50)
    bob5=new Bob(440,300,50)
    rope5=new Rope(bob5.body,roof.body,120,0)
    rope4=new Rope(bob4.body,roof.body,60,0)
    rope3=new Rope(bob3.body,roof.body,0,0)
    rope2=new Rope(bob2.body,roof.body,-60,0)
    rope1=new Rope(bob1.body,roof.body,-120,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope5.display()
  rope4.display()
  rope3.display()
  rope2.display()
  rope1.display()
  text(mouseX+", "+mouseY,mouseX,mouseY)
 
}

function keyPressed(){
  if(keyCode==UP_ARROW){
  
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
}
}



