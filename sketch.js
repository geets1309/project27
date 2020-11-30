
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1= new Bob(300,300,25);
bob2= new Bob(350,300,25);
bob3= new Bob(400,300,25);
bob4= new Bob(450,300,25);
bob5= new Bob(500,300,25);

roof=new Roof(400,100,300,10);

rope1=new Rope(bob1.body,roof.body);
/*rope2=new Rope(bob2.body,roof.body);
rope3=new Rope(bob3.body,roof.body);
rope4=new Rope(bob4.body,roof.body);
rope5=new Rope(bob5.body,roof.body);*/

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
 roof.display();
rope1.display();
	
 /*rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();*/
}



