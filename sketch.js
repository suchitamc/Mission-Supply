const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var helicopter, helicopterImg;
var box1;
var box, boxImg;
var container1,container2,container3;



function preload()
{
	helicopterImg = loadImage("helicopter.png");
  boxImg = loadImage("package.png");
	
}

function setup() {
	createCanvas(800, 700);
	
	
	engine = Engine.create();
	world =  engine.world;
  
  

  helicopter = createSprite(120,80,10,10);
  helicopter.addImage(helicopterImg);
  helicopter.scale = 0.5;

  box = createSprite(29,107,10,10);
  box.addImage(boxImg);
  box.scale = 0.2;
  box.visible = false;

  box1 = new Box(29,107);

  container1 = new Container(360,680,200,20);
  container2 = new Container(560,600,20,200);
  container3 = new Container(360,600,20,200);
  

    //rectMode(CENTER);
	//Create a Ground
  
}


function draw() { 
background("pink");
  Engine.update(engine);

  if(box.y>658){
   
    box.velocityY = 0;
    box.y = 658;
  }
 

  if(keyDown(LEFT_ARROW)){
	  helicopter.x = helicopter.x-2;
  }
  if(keyDown(RIGHT_ARROW)){
	  helicopter.x = helicopter.x+2;
  }
  box.x = helicopter.x;

 if(keyDown(DOWN_ARROW)){
 
   box.visible = true;
   box.velocityY = 10;
  
 }

 
 
 
 

  box1.display();
  container1.display();
  container2.display();
  container3.display();
  drawSprites();
  
}
