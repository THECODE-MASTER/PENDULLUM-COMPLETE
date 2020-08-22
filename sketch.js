const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var chain1,circle1,platform1;
var can=1;

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    circle1 = new circle(200,200,100);
    platform1 = new Platform(600,10,1200,50);
    //log6 = new Log(230,180,80, PI/2);
    chain1 = new SlingShot(circle1.body ,{x:400,y:10});
}

function draw(){
  Engine.update(engine);
  background("black")
  
  platform1.display();
  circle1.display();
  chain1.display(circle1);
  if(keyWentDown("space")){
    if(can==1){
     can=0
    }
    else if(can==0){
     can=1
    }
  }
  if(can==1){
  Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY});
  }
}








