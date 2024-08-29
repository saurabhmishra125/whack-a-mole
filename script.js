let container=document.querySelector('.container');
let currentTile;
let currentplant;
let score=0;
let gameOver=false;
let song;
let flag=0;

window.addEventListener('load',()=>{
    setGame();
   
})
document.getElementById('start').addEventListener('click',()=>{
    setInterval(mole,1000)
    setInterval(plant,1500)
})
function setGame(){
    for(let i=0 ; i<9;i++){
    let box=document.createElement('div');
    box.id= i.toString();
      container.appendChild(box);
      box.addEventListener('click', game);
    }
}

function randombox(){
    let number=Math.floor(Math.random()*9);
    return number;
}

function mole(){
    if(gameOver == true){
        return;
    }
    if(currentTile){
        currentTile.innerHTML="";
    }
    let rat=document.createElement('img');
    rat.src='./photos/monty-mole.png';
    let number = randombox();
    if(currentplant && number == currentplant.id){
        return;
    }
    currentTile=document.getElementById(number);
    currentTile.appendChild(rat);
    flag=0;
    
}


function plant(){

    if(gameOver == true){
        return;
    }
    if(currentplant){
        currentplant.innerHTML="";
    }
    dplant=document.createElement('img');
    dplant.src='./photos/piranha-plant.png';
    let number=randombox();
    if(currentTile && number == currentTile.id){
        return;
    }
    currentplant=document.getElementById(number);
    currentplant.appendChild(dplant);
}

function game(){
   
    if(gameOver == true){
        return;
    }
    
    if(this == currentTile){
       if(flag==0){
        score += 10;
        document.getElementById('score').innerText=score;
        song=new Audio('./impact.wav');
       song.play();
       flag=1;
       }
       
        
    }
    else if(this == currentplant){
        document.getElementById('score').innerText='GAME OVER :' + score;
        song=new Audio('./plant.mp3')
        song.play();
        gameOver=true;
    }

}

document.querySelector('#reset').addEventListener('click',()=>{
    if(gameOver){
        score =0;
        document.getElementById('score').innerText=score;
        console.log('working');
        gameOver=false;

        
    }
})