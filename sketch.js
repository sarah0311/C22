const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,ball2,ball3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    var ball_options={
        restitution: 1
    }

    var ball2_options={
        restitution: 2,
        density: 2
    }

    ball = Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);

    ball2 = Bodies.circle(100,200,20,ball2_options);
    World.add(world,ball2);

    ball3 = Bodies.circle(300,200,20,ball2_options);
    World.add(world,ball3);

    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    fill("blue")
    ellipse(ball.position.x, ball.position.y,20,20);
    
    fill("green");
    ellipse(ball2.position.x, ball2.position.y,20,20)

    fill("red");
    ellipse(ball3.position.x, ball3.position.y, 20,20);
}