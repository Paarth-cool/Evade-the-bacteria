var home
var HomeImage
var boy
var boyImage
var bacteria
var bacteriaImage
var sickImage
function preload(){
boyImage = loadImage("Images/Healthy boy.png")
bacteriaImage = loadImage("Images/bacteria.png")
sickImage = loadImage("Images/Sick Boy.png")
}

function setup() {
  createCanvas(1000,700);
  boy = createSprite(800, 500, 50, 50);
  boy.addImage(boyImage)
  boy.scale = 0.7
  home = createSprite()
  
  
}

function draw() {
  background(255,255,255);
  spawnbacteria() 
  if (keyDown("RIGHT_ARROW")) {
boy.x = boy.x+15 
  } 
  if (keyDown("LEFT_ARROW")) {
    boy.x = boy.x-15 
      } 
  drawSprites();
}
function spawnbacteria(){
  if (World.frameCount%50 === 0){
var bacteria = createSprite(random(100,900),0,20,20)
bacteria.addImage(bacteriaImage)
bacteria.scale = 0.3
bacteria.velocityY = 2
  }
}
