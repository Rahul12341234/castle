const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var land, pillar, pillar1, pillar2, pillar3, tower, tower1, tower2, tower3, tower4, tower5, castle, castle1, castle2, castle3;
var boulder;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  pillar = new box(400, 200, 40, 175);
  pillar1 = new box(600, 200, 40, 175);
  pillar2 = new box(400, -150, 150, 20);
  pillar3 = new box(600, -150, 150, 20);
  tower = new box(335, -200, 20, 40);
  tower1 = new box(400, -200, 20, 40);
  tower2 = new box(465, -200, 20, 40);
  tower3 = new box(535, -200, 20, 40);
  tower4 = new box(600, -200, 20, 40);
  tower5 = new box(665, -200, 20, 40);
  
  castle = new box(500, -10, 160, 10);
  castle1 = new box(450, -30, 10, 100);
  castle2 = new box(550, -30, 10, 100);
  castle3 = new box(500, -50, 160, 10);
  
  boulder = new ball(500, -20, 30);

  land = new ground(400, 390, 800, 10);
  
  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  pillar.display();
  pillar1.display();
  pillar2.display();
  pillar3.display();
  tower.display();
  tower1.display();
  tower2.display();
  tower3.display();
  tower4.display();
  tower5.display();
  castle.display();
  castle1.display();
  castle2.display();
  castle3.display();
  boulder.display();
  land.display();
}