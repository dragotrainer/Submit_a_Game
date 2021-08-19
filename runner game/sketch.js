var flash, flash_running, edges;
var ground, groundImage;
var b1, b2;

function preload(){
    //pre-load images
    flash_running = loadAnimation("Runner-1.png","Runner-2.png");
    groundImage = loadImage("path.png");
    
  }

function setup(){
  //create sprites here
    createCanvas(1000,1000);
    //creating path
    ground = createSprite(500,500,400,20);
    ground.addImage("path.png", groundImage);
    ground.velocityY = 4;
    ground.scale = 2
    //  creating flas
   flash = createSprite(500,300,20,20);
   flash.addAnimation("Running", flash_running);
   flash.scale = 0.05;
   edges = createEdgeSprites();
   b1 = createSprite(800,1,5,1000);
   b2 = createSprite(200,1,5,1000);
   b1.visible = false;
   b2.visible = false;
  }

function draw() {
  background("white");
  if(keyDown("left")){
    flash.x = flash.x-30;
  }
  if(keyDown("right")){
    flash.x= flash.x+30;
  }
  if (ground.y > 400) {
    ground.y = ground.width / 2;
    }
    flash.collide(b1);
    flash.collide(b2);
    
    drawSprites();
  }
  


