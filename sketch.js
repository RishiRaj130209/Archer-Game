var ram
var arrow
var enemy

function preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ram = createSprite(100,100,20,20)
  

}

function draw() {
  background("#BDA297");

  createEnemy()
  
  if(keyDown(UP_ARROW)){
    ram.y -= 5 
  }

  if(keyDown(DOWN_ARROW)){
    ram.y += 5 
  }

  if(keyDown(LEFT_ARROW)){
    ram.x -= 5 
  }  

  if(keyDown(RIGHT_ARROW)){
    ram.x += 5 
  }

  if(keyDown("space")){
    shoot()
  }
    drawSprites();
  
    
  
}

function shoot(){
  arrow = createSprite(ram.x,ram.y,10,10)
  arrow.velocityX   = 6 
}

function createEnemy(){
  if(frameCount%50 === 0){
    enemy = createSprite(windowWidth+20,200,20,20);
    enemy.velocityX = -3
  }

}
