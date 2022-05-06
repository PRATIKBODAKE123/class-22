var path,boy,cash,diamonds,jwellery,sword,gameOver;
var pathImg,boyImg,boyImg_2,cashImg,diamondsImg,jwelleryImg,swordImg,gameOverImg;
var score = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
 //write a code to load the image named gameOver.png
  gameOverImg = loadImage("gameOver.png");
  boyImg_2 = loadImage("man.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
  
path=createSprite(windowWidth/2,windowHeight/2);
path.addImage(pathImg);

//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.addImage(boyImg_2);
boy.scale=0.08;
  

cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;

  path.velocityY = +(4 + 1* score/500);;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      score=score+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      score=score+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      score=score + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
       
        boy.addImage("SahilRunning",boyImg_2);
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
//create a sprite
gameOver = createSprite(width/2,height/2);
gameOver.addImage(gameOverImg);

//add a animation for gameover
//scale the gameover image

       
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ score,10,30);
  }

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50,windowWidth-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY =+(3 + 1* score/500);
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 100 == 0) {
  var diamonds = createSprite(Math.round(random(50, windowWidth-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = +(3 + 1* score/500);
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 150 == 0) {
  var jwellery = createSprite(Math.round(random(50,windowWidth-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = +(3 + 1* score/500);
  jwellery.lifetime =200;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 10 == 0) {
  var sword = createSprite(Math.round(random(50,windowWidth-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY =+(3 + 1* score/500);;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}
