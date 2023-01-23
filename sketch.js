
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let solo
let bloco1 , bloco2 , bloco3


function preload()
{
	
}

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	ellipseMode(RADIUS)
	rectMode(CENTER)

	//Crie os Corpos Aqui.
	let opcoesSolo={
		isStatic:true
	}

	let opcoesBloco1={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	let opcoesBloco2={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	let opcoesBloco3={
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}

	solo= Bodies.rectangle(550/2, 600, 550,10, opcoesSolo) 
	World.add(world , solo)

	bloco1= Bodies.circle(220,20,20 ,opcoesBloco1) 
	World.add(world , bloco1)

	bloco2= Bodies.rectangle(550/2, 540, 10,10, opcoesBloco2) 
	World.add(world ,bloco2 )

	bloco3= Bodies.rectangle(550/2, 540, 55,30, opcoesBloco3) 
	World.add(world ,bloco3 )

	Engine.run(engine);
  
}


function draw() {
	background('blue')
	fill('red')
	

	Engine.update(engine)

	rect(solo.position.x , solo.position.y,550, 10 )
	rect(bloco2.position.x ,bloco2.position.y ,10 ,10)
	rect(bloco3.position.x ,bloco3.position.y ,55 ,30)
	circle(bloco1.position.x ,bloco1.position.y ,20 )
  drawSprites();
 
}



