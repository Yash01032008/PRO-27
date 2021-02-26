
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ball1,ball2,ball3,ball4,ball5,roof1,chain

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1= new ball(400,400,50)
	ball2= new ball(450,400,50)
	ball3= new ball(500,400,50)
	ball4= new ball(550,400,50)
	ball5= new ball(600,400,50)
	roof1= new roof(400,100,50,20)
	roof2= new roof(450,100,50,20)
	roof3= new roof(500,100,50,20)
	roof4= new roof(550,100,50,20)
	roof5= new roof(600,100,50,20)


	

	
	chain = new Chain(ball1.body,roof1.body)
	chain2 = new Chain(ball2.body,roof2.body)
	chain3 = new Chain(ball3.body,roof3.body)
	chain4 = new Chain(ball4.body,roof4.body)
	chain5= new Chain(ball5.body,roof5.body)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  up();
  drawSprites();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}

function up (){
	if(keyDown("SPACE")){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:250,y:400})
	}
}



