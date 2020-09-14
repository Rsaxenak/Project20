// to create our sprites, car and wall
var car, wall;
// to create variable speed, weight and deformation
var speed, weight,deformation;

function setup() {
  //to create canvas
  createCanvas(1600,400);
  //to set speed to random 
  speed = random(55,90);
  //to set the weight of car
  weight = random(400,1500);

  
  // to crate wall
  wall = createSprite(1500,200,60,height/2)
  // to set the colour of wall
  wall.shapeColor = rgb(80,80,80);
  
  // to create the car sprite
  car = createSprite(50, 200, 50, 50);
  // to set its velocity to var speed created before
  car.velocityX = speed;

  deformation = (0.5 * weight * speed * speed)/22500 ;

}

function draw() {
  background(255,255,255);
  
  

  // if car is colliding wall
  if (wall.x - car.x <= wall.width/2 + car.width/2 ) 
  {
    car.velocityX = 0;
    
    // if deformation is less than 100
    if (deformation < 100) 
    {
      car.shapeColor = rgb(0,255,0);
    }
    // if deformation is between 100 and 180
    if (deformation > 99 && deformation < 181) 
    {
      car.shapeColor = rgb(230,230,0);
    }
    // if deformation is even greater than 180
    if (deformation > 180) 
    {
      car.shapeColor = rgb(255,0,0);
    }
  }
  
  drawSprites();
}