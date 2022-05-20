var  PLAY = 1
var  END = 2
var gameState = PLAY;
var  gameover 
var policeGroup, police1IMG,police2IMG,police3IMG,police4IMG,police5IMG,police6IMG
var bridge, bridgeIMG ;
var player , playerIMG
var sea , seaIMG


var score=0

function preload(){
bridgeIMG = loadImage("bridge.png")
seaIMG =  loadImage("sea.png")
playerIMG = loadImage("player.png")
police1IMG = loadImage("police1.png")
police2IMG = loadImage("police2.png")
police3IMG= loadImage("police3.png")
police4IMG = loadImage("police4.png")
police5IMG = loadImage("police5.png")
police6IMG = loadImage("police6.png")
gameover =loadImage("gameOver.png")
}


function setup() {
   
 createCanvas(600,750)
 sea = createSprite(600,600)
 sea.addImage("sea",seaIMG)
 player = createSprite(300,550)
 player.addImage("player",playerIMG)
 bridge = createSprite(300,600)
 bridge.addImage("bridge",bridgeIMG)
 
 policeGroup =new Group()
 player.debug=true
 player.setCollider("circle",0,0,100)

}

function draw() {
       
          
        
 if (gameState === PLAY){
       
        spawnpoliceGroup()
        player.depth=bridge.depth
        player.depth+=1
        if (bridge.y<200){
                bridge.y=300
        
            }  
            gameover.visible= false
            
            bridge.velocityY =-2
            
            score = score+1
           ;
            sea.scale=6
          bridge.scale=2.8
        player.scale=0.3
            if (keyDown("left")){
                player.x=player.x-3
            }
            if (keyDown("right")){
                player.x=player.x+3
            }
            if (keyDown("up")){
               player.y=player.y-5
            }
            if (keyDown("down")){
               player.y=player.y+5
               
              
              
            }
            if (policeGroup.isTouching(player)){
                    console.log("collided")
                    policeGroup.destroyEach()
                    gameState = END
            }   
            if (gameState === END ){
                fill ("red")
                textSize (18)
                text("GAMEOVER" , 200,200)         
                bridge.velocityY=0;
        console.log("gameover")
        
         }       
 }


 drawSprites()
 fill ("red")
 textSize (18)
 text("Score: "+ score, 20,30)
 
 
}
function spawnpoliceGroup(){

if (frameCount % 100 === 0){
        
    var police = createSprite(random(220,380),165)
    police.velocityY = 2;
    police.scale=0.5
    
    police.lifetime = 299;
    police.debug=true
    police.setCollider("circle",0,0,100)
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: police.addImage(police1IMG);
              break;
      case 2: police.addImage(police2IMG);
              break;
      case 3: police.addImage(police3IMG);
              break;
      case 4: police.addImage(police4IMG);
              break;
      case 5: police.addImage(police5IMG);
              break;
      case 6: police.addImage(police6IMG);
              break;
      default: break;
    }
  
   
}


}
 