var bunny, carrot, brick1, brick2, brick3, brick4, brick5, brick6, brick7, snakesGroup, bg, bgImg, bunnyImg, snakeImg, carrotImg;

function preload(){
  bgImg = loadImage("image/bg.png");
  bunnyImg = loadImage("image/bunnyImg.png");
  carrotImg = loadImage("image/carrot.png");
  snakeImg = loadImage("image/snake.png");
}

function setup() {

  createCanvas(600,600);
  bg = createSprite(300,300,600,600);
  bg.addImage(bgImg);
  bg.scale = 5;

  bunny = createSprite(100,500,30,30);
  bunny.shapeColor = "white";
  bunny.addImage(bunnyImg);
  bunny.scale = 0.30;

  carrot = createSprite(500,100,50,50);
  carrot.shapeColor = "red";
  carrot.addImage(carrotImg);
  carrot.scale = 0.20;

  brick1 = createSprite(60,400,120,20);
  brick1.shapeColor = "black";
  brick2 = createSprite(260,400,120,20);
  brick2.shapeColor = "black";
  brick3 = createSprite(440,400,120,20);
  brick3.shapeColor = "black";
  brick4 = createSprite(620,400,120,20);
  brick4.shapeColor = "black";
  brick5 = createSprite(160,300,120,20);
  brick5.shapeColor = "black";
  brick6 = createSprite(340,300,120,20);
  brick6.shapeColor = "black";
  brick7 = createSprite(520,300,120,20);
  brick7.shapeColor = "black";

  snakesGroup = createGroup();
  
}

function draw() {

  background("green");  

  if(keyDown("up")){
    bunny.y = bunny.y - 2;
  }

  if(keyDown("down")){
    bunny.y = bunny.y + 2;
  }

  if(keyDown("right")){
    bunny.x = bunny.x + 2;
  }

  if(keyDown("left")){
    bunny.x = bunny.x - 2;
  }

  if(bunny.isTouching(carrot)){
    textSize(25);
    fill("white");
    text("YOU WIN",300,300);
  }

  if(bunny.isTouching(brick1)){
    bunny.x = 100;
    bunny.y = 500;
  }
  if(bunny.isTouching(brick2)){
    bunny.x = 100;
    bunny.y = 500;
  }
  if(bunny.isTouching(brick3)){
    bunny.x = 100;
    bunny.y = 500;
  }
  if(bunny.isTouching(brick4)){
    bunny.x = 100;
    bunny.y = 500;
  }
  if(bunny.isTouching(brick5)){
    bunny.x = 100;
    bunny.y = 500;
  }
  if(bunny.isTouching(brick6)){
    bunny.x = 100;
    bunny.y = 500;
  }
  if(bunny.isTouching(brick7)){
    bunny.x = 100;
    bunny.y = 500;
  }

  for(var i = 0;i<snakesGroup.length;i++){
    var temp = snakesGroup.get(i);
    if(bunny.isTouching(temp)){
      bunny.x = 100;
      bunny.y = 500;
      temp.destroy();
      
    }
    
  }

  createSnakes();

  drawSprites();
}

function createSnakes() {
  if(frameCount %50 == 0){
    var snake = createSprite(600,random(70,520),random(30,120),5);
    snake.velocityX = -4;
    snake.shapeColor = "brown";
    snake.addImage(snakeImg);
    snake.scale = 0.25;
  }
}
  
