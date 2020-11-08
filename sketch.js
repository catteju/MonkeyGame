
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  console.log(ground.x);
  
  score = 0;
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
  
}


function draw() {
  
  score = score + Math.round(getFrameRate()/60);
  
  text("SURVIVAL TIME:"+score, 500, 50);
  textSize(20);
  stroke("black");
  fill("black");
  
  background("lightGreen"); 
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -12;
  }
  
   spawnObstacles();
   spawnFruits();  
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  

  drawSprites();  
}

function spawnObstacles(){
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(80,325,10,10);
    obstacle.x = Math.round(random(80,200));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.setLifetime = -1;
    obstacle.velocityX = -3;
    obstacle.collide(ground);
    obstacleGroup.add(obstacle);
  }
}
function spawnFruits(){
  if(frameCount % 80 === 0){
   var banana = createSprite(400,120,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -8;
    banana.setLifetime = -1;
    
    FoodGroup.add(banana);
  }
}



