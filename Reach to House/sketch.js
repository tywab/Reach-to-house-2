var houseimg,trackimg,carImg,bgimg;
var player,game,house;
var distance=0;
var gameState="Play";
var obstacle1Image,obstacle2Image,blastImg,fuelImg;
var obstacles,fuels,;

function preload(){
    houseimg=loadImage("assets/house.png");
    trackimg=loadImage("assets/track.jpg");
    carImg=loadImage("assets/car.png");
    bgimg=loadImage("assets/track.png");
    obstacle1Image=loadImage("assets/obstacle1.png");
    obstacle2Image=loadImage("assets/obstacle2.png");
    blastImg=loadImage("assets/blast.png");
    fuelImg=loadImage("assets/fuel.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    player=createSprite(width/2,height-50,20,32);
    player.addImage("car",carImg);
    player.addImage("blast",blastImg);
    player.changeImage("car");
    player.scale=0.09;
    
    game=new Game();

    house=createSprite(width/2,height-3000,40,40);
    house.addImage(houseimg);
    house.scale=0.5;
}


function draw(){
background("brown")
image(trackimg,0,-height*4,width,height*5);
if(gameState==="Play"){
    game.play();
}

if(gameState==="over"){
    game.end();
}

drawSprites();
}