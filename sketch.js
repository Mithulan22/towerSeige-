const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var ground1, ground2, ground3;
var slingshot1, hexagon1;


function setup() {
  var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;



  push(); 
  fill ("pink"); 
  box1=new Box(450,550,50,50); 
  box2 = new Box(500,550,50,50); 
  box3 = new Box(550,550,50,50); 
  box4 = new Box(600,550,50,50); 
  box5 = new Box(650,550,50,50); 
  box6 = new Box(700,550,50,50); 
  box7 = new Box(750,550,50,50);
  pop ();
  
  box8=new Box(500,450,50,50); 
  box9=new Box(550,450,50,50); 
  box10=new Box(600,450,50,50); 
  box11=new Box(650,450,50,50); 
  box12=new Box(700,450,50,50);
  box13=new Box(550,450,50,50); 
  box14=new Box(600,450,50,50); 
  box15=new Box(650,450,50,50); 
  box16=new Box(600,450,50,50); 
  box17 = new Box(820,200,40,40); 
  box18 = new Box(860,200,40,40); 
  box19 = new Box(900,200,40,40); 
  box20 = new Box(940,200,40,40); 
  box21 = new Box(980,200,40,40); 
  box22 = new Box(860,200,40,40); 
  box23 = new Box(900,200,40,40); 
  box24 = new Box(940,200,40,40); 
  box25 = new Box(900,150,40,40);

  hexagon1=new hexagon(150,500,30);
   slingshot1=new slingShot(hexagon1.body,{x:150,y:500});
    ground1=new ground(600,605 ,370,10);
    ground2=new ground(600,780,1200,20); 
    ground3 = new ground(900,300,220,10);
    Engine.run(engine);
}

function draw() {
  background(200);  
  
  ground1.display();
  ground2.display();
  ground3.display();
  push();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  pop();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  slingshot1.display();
  hexagon1.display();


  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
  slingshot.attach(hexagon1.body) 
  Matter.Body.setPosition(hexagon1.body, {x: mouseX , y: mouseY}, 200, 50)
  hexagon1.trajectory = []
  }
  }

function mouseDragged() { 
  Matter.Body.setPosition(hexagon1.body,{x:mouseX,y:mouseY})
 } 
  
function mouseReleased() { 
    slingshot1.fly(); 
  }

  async function getTime(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/America/Toronto")
    var responseType = await response.json()
    var datetime = responseType.datetime
    console.log(datetime)
    var hour = datetime.slice(11,13)
    console.log(hour)
    if(hour>=06 && hour<=18){
    bg = "light.jpd"
    }
    else {
        bg = "dark.jpd"
    }
    backgroundImg = loadImage(bg)
    
    }