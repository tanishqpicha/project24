var paperBody, engine, world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

function preload(){
	

}


function setup() {
	createCanvas(1600,700);
	keyPressed();

	rectangleSprite=createSprite(1200,600,50,50);
	rectangleSprite.shapeColor="red"

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	line=createSprite(350,640,250,10);
	line.shapeColor="red"

    line1=createSprite(480,570,20,150);
	line1.shapeColor="red"
	
	line2=createSprite(220,570,20,150);
	line2.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	paperBody = Matter.Bodies.circle(200 , 200 , 5 , options);
	World.add(world, paperBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBody, paperBody.position, {x: 85, y: -85} );
	}
}