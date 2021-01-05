const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, plat1, plat2, stand, polygon, slingshot;
var bb1, bb2, bb3, bb4, bb5, bb6, bb7, bb8, bb9, bb10, bb11, bb12;
var pb1, pb2, pb3, pb4, pb5, pb6, pb7, pb8;
var gb1, gb2, gb3, gb4;
var pub1;

function preLoad(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,30);
    plat1 = new Ground(400,300,270,10);
    plat2 = new Ground(700,210,200,10);
    stand = new Ground(50,350,10,80);

    polygon = new Polygon(60,300,50,50);

    slingshot = new SlingShot(polygon.body,{x:60,y:300});

//plat1 blocks
    bb1 = new BlockB(340,298,25,30);
    bb2 = new BlockB(365,298,25,30);
    bb3 = new BlockB(380,298,25,30);
    bb4 = new BlockB(405,298,25,30);
    bb5 = new BlockB(430,298,25,30);
    bb6 = new BlockB(455,298,25,30);
    bb7 = new BlockB(480,298,25,30);

    pb1 = new BlockP(365,258,25,30);
    pb2 = new BlockP(380,258,25,30);
    pb3 = new BlockP(405,258,25,30);
    pb4 = new BlockP(430,258,25,30);
    pb5 = new BlockP(455,258,25,30);

    gb1 = new BlockG(380,218,25,30);
    gb2 = new BlockG(405,218,25,30);
    gb3 = new BlockG(430,218,25,30);

    pub1 = new BlockPu(405,178,25,30);

//plat2 blocks
    bb8 = new BlockB(665,208,25,30);
    bb9 = new BlockB(680,208,25,30);
    bb10 = new BlockB(705,208,25,30);
    bb11 = new BlockB(730,208,25,30);
    bb12 = new BlockB(755,208,25,30);

    pb6 = new BlockP(680,168,25,30);
    pb7 = new BlockP(705,168,25,30);
    pb8 = new BlockP(730,168,25,30);

    gb4 = new BlockG(705,128,25,30);


}
function draw(){
    background(225);
    Engine.update(engine);
    ground.display();
    plat1.display();
    plat2.display();
    stand.display();
    polygon.display();
    slingshot.display();

    bb1.display();
    bb2.display();
    bb3.display();
    bb4.display();
    bb5.display();
    bb6.display();
    bb7.display();
    bb8.display();
    bb9.display();
    bb10.display();
    bb11.display();
    bb12.display();

    pb1.display();
    pb2.display();
    pb3.display();
    pb4.display();
    pb5.display();
    pb6.display();
    pb7.display();
    pb8.display();

    gb1.display();
    gb2.display();
    gb3.display();
    gb4.display();

    pub1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
       slingshot.attach(polygon.body); 
    }
}