const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Events = Matter.Events;

var engine, world;
var snows = [];
var bg,snow;

function preload (){
  bg=loadImage("snow2.jpg")
}


function setup() {
  createCanvas(1200,800);
  engine=Engine.create();
  world = engine.world;

  if (frameCount%25===0){

    for(var i=0; i<200; i++){
    snows.push(new Snow(random(0,1200),random(0,800)));

    }
  }


}

function draw() {
  background(bg);
  Engine.update(engine);


  if (frameCount%10===0){
    snows.push(new Snow (random(width/2-10,width/2+10),10,10));
  }
  
  for (var k = 0; k <snows.length; k++) {
    snows[k].display();
    snows[k].updatev();
  }
  
  }
  
  
  
