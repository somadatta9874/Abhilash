const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 var ball,holder;
 var ballDiameter=40;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();ball
  world = engine.world;
  startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	ball1=new Ball(startBobPositionX-ballDiameter*2,startBobPositionY,ballDiameter);
	ball2=new Ball(startBobPositionX-ballDiameter,startBobPositionY,ballDiameter);
	ball3=new Ball(startBobPositionX,startBobPositionY,ballDiameter);
	ball4=new Ball(startBobPositionX+ballDiameter,startBobPositionY,ballDiameter);
	ball5=new Ball(startBobPositionX+ballDiameter*2,startBobPositionY,ballDiameter);

	
  plank=new Plank (450,120,600,50)
 
  rope1=new rope(ball1.body,plank.body,-ballDiameter*2, 0)

	rope2=new rope(ball2.body,plank.body,-ballDiameter*1, 0)
	rope3=new rope(ball3.body,plank.body,0, 0)
	rope4=new rope(ball4.body,plank.body,ballDiameter*1, 0)
	rope5=new rope(ball5.body,plank.body,ballDiameter*2, 0)


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(64,31,13);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  plank.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

  }
}
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

  
  