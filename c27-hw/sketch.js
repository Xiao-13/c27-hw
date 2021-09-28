
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new roof(400, 100, 550, 50);
	ballDiameter = 40;
	bobObject1=new Ball(305, 300, 50, 40);
	bobObject2=new Ball(415, 300, 50, 40);
	bobObject3=new Ball(525, 300, 50, 40);
	bobObject4=new Ball(635, 300, 50, 40);
	bobObject5=new Ball(745, 300, 50, 40);

	rope1=new rope(bobObject1.body,ground.body,-40*2, 0) 
	rope2=new rope(bobObject2.body,ground.body,-40*1, 0) 
	rope3=new rope(bobObject3.body,ground.body,0, 0) 
	rope4=new rope(bobObject4.body,ground.body,40*1, 0) 
	rope5=new rope(bobObject5.body,ground.body,40*2, 0) 
	
	/*constraint1={
		bodyA: bobObject1.body,
		bodyB: ground.body,
		pointB:{x:-40*2,y:0}
	}

	constraint2={
		bodyA: bobObject2.body,
		bodyB: ground.body,
		pointB:{x:-40,y:0}
	}

	constraint3={
		bodyA: bobObject3.body,
		bodyB: ground.body,
		pointB:{x:0,y:0}
	}

	constraint4={
		bodyA: bobObject4.body,
		bodyB: ground.body,
		pointB:{x:40,y:0}
	}

	constraint5={
		bodyA: bobObject5.body,
		bodyB: ground.body,
		pointB:{x:40*2,y:0}
	}

	var pendulum1=Constraint.create(constraint1);
	var pendulum2=Constraint.create(constraint2);
	var pendulum3=Constraint.create(constraint3);
	var pendulum4=Constraint.create(constraint4);
	var pendulum5=Constraint.create(constraint5);

	World.add(world,pendulum1);
	World.add(world,pendulum2);
	World.add(world,pendulum3);
	World.add(world,pendulum4);
	World.add(world,pendulum5);
*/
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  ground.display();
  bobObject1.display();
  rope1.display();
  bobObject2.display();
  rope2.display();
  bobObject3.display();
  rope3.display();
  bobObject4.display();
  rope4.display();
  bobObject5.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-50,y:-45});
	}
}


