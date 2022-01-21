var balloon2
var database
var Position
var updateHeight

function preload(){
backgroundImage= loadImage("Hot Air Ballon-01.png")
balloonImage= loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
balloonImage2= loadImage("Hot Air Ballon-02.png")
}
function setup() {
  createCanvas(800,400);
  database= firebase.database();

 
  balloon2= createSprite(100,200,40,40)
  balloon2.addAnimation("balloon",balloonImage)
  balloon2.scale=0.4
  var balloonPosition= database.ref('balloon/position')
  balloonPosition.on("value",readPosition, showError)
}

function draw() {
  background(backgroundImage); 
 

  
  if(keyDown(LEFT_ARROW)){
    balloon2.addAnimation("hotAirBalloon",balloonImage2);
     balloon2.x=balloon2.x-10;
   
  } 
  else if(keyDown(RIGHT_ARROW)){
    balloon2.addAnimation("hotAirBalloon",balloonImage2);
    balloon2.x=balloon2.x+10;
  }
  else if(keyDown(UP_ARROW)){
balloon2.addAnimation("hotAirBalloon",balloonImage2);
balloon2.y=balloon2.y-10;

   balloon2.scale=0.5;
  }
  else if(keyDown(DOWN_ARROW)){
balloon2.addAnimation("hotAirBalloon",balloonImage2);
balloon2.y=balloon2.y+10;


    balloon2.scale=0.3;
    }
  console.log(balloon2.x)
  console.log(balloon2.y)
  drawSprites();

}
function updateHeight(x,y){
database.ref('balloon/position').set({
  
})
}
function readPosition(data){
  position=data.val();
  balloon2.x = position.x;
  balloon2.y= position.y;
}
function showError(){
  console.log("An error in writing the database")
}