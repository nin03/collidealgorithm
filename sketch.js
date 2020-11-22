var fixed, moving;

function setup() {
  createCanvas(800,400);
 moving= createSprite(400, 200, 50, 80);
 moving.shapeColor="red";
 fixed= createSprite(200,200,80,50);
 fixed.shapeColor="cyan";
}

function draw() {
  background(255,255,255);  
  moving.x=mouseX;
  moving.y=mouseY;
  console.log(moving.x-fixed.x);
  if(moving.x-fixed.x<=fixed.width/2+moving.width/2
    && fixed.x-moving.x<=fixed.width/2+moving.width/2){
    moving.shapeColor="green";
    fixed.shapeColor="green";
  }
  else{
    fixed.shapeColor="cyan";
    moving.shapeColor="red";
  }
  drawSprites();
}