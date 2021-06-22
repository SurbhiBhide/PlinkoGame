var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

var particlegrp;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 5; k <=800; k = k + 87.7) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  //create 1st row of plinko objects
  for (var j = 40; j < width; j=j+60) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 10; j <=width -10; j=j+60) 
  {
    plinkos.push(new Plinko(j,130));
  }

   //create 3nd row of plinko objects
  for (var j = 40; j < width; j=j+60) { 
    plinkos.push(new Plinko(j,190));
  }

  //create 4nd row of plinko objects
  for (var j = 10; j <=width-10; j=j+60) 
  {
    plinkos.push(new Plinko(j,250));
  }

  for (var j = 40; j < width; j=j+60) { 
    plinkos.push(new Plinko(j,310));
  }

  for (var j = 10; j <=width-10; j=j+60) 
  {
    plinkos.push(new Plinko(j,360));
  }

  for (var j = 40; j < width; j=j+60) { 
    plinkos.push(new Plinko(j,410));
  }

  //create 4nd row of plinko objects
  for (var j = 10; j <=width-10; j=j+60) 
  {
    plinkos.push(new Plinko(j,460));
  }



  //create particle objects
  
  
 // Engine.run(engine);
    
}
 
function draw() {
  background("black");
  textSize(20)
  if (frameCount % 50 === 0){
    particles.push(new Particles(random(30,770), 10, 10));
    //particlegrp.add(particles);
  }
 
  if (frameCount % 5000 === 0){
    particles = [];
  }

  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  text("Click your mouse to spawn more balls",450,30)
}

function mousePressed(){
  particles.push(new Particles(mouseX,mouseY, 10));
  
}