const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world, ground, ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);
  var Boptions = {
    restitution : 1
  }
  ball = Bodies.circle(400,100,50,Boptions);
  World.add(world,ball);
}

function draw() {
 Engine.update(engine);
  background("blue");  
 rectMode(CENTER);
 rect(ground.position.x, ground.position.y,800,20); 
 circle(ball.position.x, ball.position.y,50*2);
}