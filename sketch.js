var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redbox
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box1 = new Box("400,650,20,200");
	box1.shapeColor=Color("red");

	box2 = new Box("400,650,100,20");
	box2.shapeColor=Color("red");

	box3 = new Box("400,650,20,20");
	box3.shapeColor=Color("red");

	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

5
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.display();
  box2.display();
  box3.display();
 
  drawSprites();
 
}

function keyPressed() {
	 if (keyCode === DOWN_ARROW) { 
		 Matter.Body.setStatic(packageBody,false); 
		} 
	}



