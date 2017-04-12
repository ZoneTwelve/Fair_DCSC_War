var ball_diameter = 20, zazpperwidth = 6, bomb_diameter = 10;
var lock = 0,playerSpeed = 2, time = 0, turn = 0.05;
var bombposX = [], bombposY = [], bombacceleration = [], bombvelocity = [];
var playerLocation, xpoint, ypoint, posX, numofbombs;
var mainMessage,mainMessagePos;
var reloadBtn,conversionTimeInterval;
function setup(){
    var conversionTimeInterval = setInterval("time++",1000);
    createCanvas(window.innerWidth*.9,window.innerHeight*.9);
    fill(255);
    posX = zazpperwidth + .5*ball_diameter - 2;
    xpoint = 0.5*width;
    ypoint = height - .5 * ball_diameter;
    playerLocation = playerSpeed;
    mainMessage = "點擊切換移動方向,碰觸牆壁會死亡";
    numofbombs = floor(width/50)
    intitbombpos();
}

function draw(){
    background(51);
    textSize(10);
    text("太陽是廢物",20,20);
    textSize(numofbombs*2)
    text(mainMessage+"\r\n"+conversionSeconds(time)+"\t 等級:"+(floor(turn*100)-5),width/2 - textWidth(mainMessage)/2,50)
    updateObj();
    game();
    // if(mouseIsPressed && (xpoint+.5*ball_diameter)<width & lock != 1){
    //     (playerLocation == playerSpeed) ? playerLocation = -playerSpeed : playerLocation = playerSpeed;
    //     lock = 1;
    // }else if(!mouseIsPressed){
    //     lock = 0;
    // }
    
    if(xpoint < posX || xpoint>=width-posX || touchBomb())
        gameOver();
}

function game(){
    ellipse(xpoint,ypoint,ball_diameter,ball_diameter) 
    xpoint+=playerLocation;
    rect(0,0,zazpperwidth,height);
    rect(width,0,-zazpperwidth,height);
    for(var i=0;i<numofbombs;i++)
        ellipse(bombposX[i],bombposY[i],bomb_diameter);
}

function touchBomb(){
    var temp = 0.5*(ball_diameter+bomb_diameter)-5;
    var distance;
    for(var i=0;i<numofbombs;i++){
        distance = dist(xpoint,ypoint,bombposX[i],bombposY[i]);
        // console.log(distance,temp);
        if(distance < temp)
            return true
    }
    return false
}

function intitbombpos(){
    for(var i=0;i<numofbombs;i++){
        bombacceleration [i] = (random(turn, turn+0.05)*100)/100; 
        bombposX[i] = (random(zazpperwidth+(0.5*ball_diameter),width));
        bombposY[i] = -(random(1,10));
        bombvelocity[i] = 0;
    }
    turn+=0.01
}

function updateObj(){
    var type = 0;
    for(var i=0;i<numofbombs;i++){
        bombvelocity[i] += bombacceleration[i];
        bombposY[i] += bombvelocity[i];
        if(bombposY[i]<height)
            type = 1;
    }
    if(type === 0)return intitbombpos();
    // console.log(bombposX,bombposY,bombacceleration);
}

function gameOver(){
    clearInterval(conversionTimeInterval);
    reloadBtn = createButton('重新遊玩');
    reloadBtn.mousePressed(function(){location.reload()});
    noLoop();
    clear();
    game();
    var msg = "Game Over";
    textSize(50);
    fill(0)
    textSize(10);
    text("太陽是廢物",20,20);
    textSize(numofbombs*2)
    text(mainMessage+"\r\n"+conversionSeconds(time)+"\t 等級:"+(floor(turn*100)-5),width/2 - textWidth(mainMessage)/2,50)
    text(msg+"\r\n生存: "+conversionSeconds(time),width/2 - textWidth(msg)/2,height/2);
}

function conversionSeconds(s){
	var min = Math.floor(s/60);
	var sec = s%60;
	return nf(min,2) + ":" + nf(sec,2);
}

document.onclick = function(){
    (playerLocation == playerSpeed) ? playerLocation = -playerSpeed : playerLocation = playerSpeed;
}