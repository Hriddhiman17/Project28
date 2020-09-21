const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stone, slingShot, boy_Img, boy, tree, mango1, mango2, mango3, mango4, mango5, mango6;

function preload(){
    boy_Img = loadImage("boy.png");
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    boy = createSprite(200, 620);
    boy.scale = 0.125;
    mango1 = new Mango(900, 200);
    mango2 = new Mango(800, 300);
    mango3 = new Mango(1000, 250);
    mango4 = new Mango(850, 250);
    mango5 = new Mango(1100, 350);
    mango6 = new Mango(1000, 300);
    mango7 = new Mango(950, 350);
    mango8 = new Mango(900, 300);
    mango9 = new Mango(750, 350);
    mango10 = new Mango(850, 350);
    stone = new Stone(100,150, 50);
    detectCollision(stone, mango1);
    detectCollision(stone, mango2);
    detectCollision(stone, mango3);
    detectCollision(stone, mango4);
    detectCollision(stone, mango5);
    detectCollision(stone, mango6);
    detectCollision(stone, mango7);
    detectCollision(stone, mango8);
    detectCollision(stone, mango9);
    detectCollision(stone, mango10);

    ground = new Ground(600,height,1200,10);
    tree = new Tree(900,1000,1200,10);
    slingShot = new SlingShot(stone.body,{x : 140, y : 550});

}

function draw(){
    background(225);
    Engine.update(engine);

    textSize(24);
    text("Press Space to get a second Chance to Play!!", 100, 50);
    
    boy.addImage(boy_Img);

    ground.display();
    tree.display();
    drawSprites();
    stone.display();
    slingShot.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x : 140, y : 550});
        slingShot.attach(stone.body);
    }
}
function detectCollision(lstone,lmango){ 
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance <= lmango.r +lstone.r){
        Matter.Body.setStatic(lmango.body, false);
    }
}