var wall,thickness;

var bullet,speed,weight;

var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(20, 200,50,25);
  wall=createSprite(1200,200,thickness,height/2);

  bullet.velocityX=speed;
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor=color(255,215,0);
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
   
    if(deformation>10){
      bullet.shapeColor=color(255,0,0);      
    }

    if(deformation<10){
      bullet.shapeColor=color(0,255,0);      
    }
  }


  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
  
}









