
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var iron, hammer, stone, rubber, plane;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10;
var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    //plane = createSprite(600,height,1200,20);

	plane = new Plane(600,height,1200,20);
	stone = new Stone(700,320,100,100);
	iron = new Iron(300,350);
	hammer = new Hammer(10,100);
	sand1 = new Sand(505,450,10);
	sand2 = new Sand(510,450,10);
	sand3 = new Sand(515,450,10);
	sand4 = new Sand(520,450,10);
	sand5 = new Sand(525,450,10);
	sand6 = new Sand(515,445,10);
    sand7 = new Sand(520,445,10);
	sand8 = new Sand(525,450,10);
	sand9 = new Sand(530,450,10);
	sand10 = new Sand(535,450,10);

	//Engine.run(engine);
  
}


function draw() {
  background('aqua');
  Engine.update(engine);
  
  stone.display();
  iron.display();
  plane.display();
  hammer.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  drawSprites();
}



