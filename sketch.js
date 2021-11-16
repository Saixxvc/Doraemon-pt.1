var doraemon, doracake, mouse, background, afraidDoraemon;
var score = 0;

function preload(){
    doraemonImg = loadImage("doraemon.png");
    doracakeImg = loadImage("doracake.png");
    mouseImg = loadImage("mouse.png");
    backgroundImg = loadImage("Backgound.jpg");
    afraidDoraemonImg = loadImage("afraiddoraemon");
}

function setup(){
    createCanvas(400,400);

    doraemon = createSprites(40,50,100,300);
    doraemon.addAnimation("dorae",doraemonImg);

    doracake = createSprites(50,60,150,250);
    doracake.addAnimation("cake",doracakeImg);

    mouse = createSprites(100,20,150,300);
    mouse.addAnimation("mouse",mouseImg);

}

function draw(){
    background(background);

    drawSprites();
}