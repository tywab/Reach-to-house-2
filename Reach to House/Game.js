class Game{
    constructor(){

    }

    play(){
        player.y=height-distance;
        if(keyIsDown(UP_ARROW)){
            distance=distance+10;
        }

        if(keyIsDown(RIGHT_ARROW)){
            this.leftKeyActive = false;
            player.x=player.x+ 5;
        }

        if(keyIsDown(LEFT_ARROW)){
            this.leftKeyActive = true;
            player.x=player.x- 5;
        }

        camera.x=width/2;
        camera.y=player.y;
        
        
        if(player.isTouching(house)){
            gameState="over"
        }
        obstacles=new Group()

        var obstaclesPositions = [
            { x: width / 2 + 250, y: height - 800, image: obstacle2Image },
            { x: width / 2 - 150, y: height - 1300, image: obstacle1Image },
            { x: width / 2 + 250, y: height - 1800, image: obstacle1Image },
            { x: width / 2 - 180, y: height - 2300, image: obstacle2Image },
            { x: width / 2, y: height - 2800, image: obstacle2Image },
            { x: width / 2 - 180, y: height - 3300, image: obstacle1Image },
            { x: width / 2 + 180, y: height - 3300, image: obstacle2Image },
            { x: width / 2 + 250, y: height - 3800, image: obstacle2Image },
            { x: width / 2 - 150, y: height - 4300, image: obstacle1Image },
            { x: width / 2 + 250, y: height - 4800, image: obstacle2Image },
            { x: width / 2, y: height - 5300, image: obstacle1Image },
            { x: width / 2 - 180, y: height - 5500, image: obstacle2Image }
          ];

          this.addSprites(
            obstacles,
            obstaclesPositions.length,
            obstacle1Image,
            0.1,
            obstaclesPositions
          );
          
          if(player.collide(obstacles)){
              player.changeImage("blast")
              gameState="end"
          }

          fuels=new Group();
          this.addSprites(fuels,3,fuelImg,0.02) 

    }

    addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
        for (var i = 0; i < numberOfSprites; i++) {
          var x, y;
    
          //C41 //SA
          if (positions.length > 0) {
            x = positions[i].x;
            y = positions[i].y;
            spriteImage = positions[i].image;
          } else {
            x = random(width / 2 + 150, width / 2 - 150);
            y = random(-height * 4.5, height - 400);
          }
          var sprite = createSprite(x, y);
          sprite.addImage("sprite", spriteImage);
    
          sprite.scale = scale;
          spriteGroup.add(sprite);
        }
      }

    end(){
        console.log("YOU LOSE");

        player.visible=false;
    }
}
