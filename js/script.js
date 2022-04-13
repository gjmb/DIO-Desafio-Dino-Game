const dino = document.querySelector('.dino'); 
const background=document.querySelector('.background'); 
let isJumping = false;
let dinoPosition = 0;
//console.log(dino);



function jump(){
    
    isJumping=true;
    let upInterval = setInterval(() => {
        if(dinoPosition>=150){
            //para de subir
            clearInterval(upInterval);

            //desce
            let downInterval = setInterval(() => {
                //para de descer
                if(dinoPosition <=0){
                     clearInterval(downInterval);
                     isJumping=false;
                } else {
                    dinoPosition-=20;
                    dino.style.bottom = dinoPosition+'px';
                } 
            }, 20);

        } else {
            //sobe
            dinoPosition +=20;
            dino.style.bottom = dinoPosition+'px';
        }

    }, 20);
}


function createCactus(){
    //cria um cactus
    const cactus = document.createElement('div');
    let cactusPosition=1000;
    let randomTime = Math.random()* 6000;
 
    //posiciona e o adiciona ao background

    cactus.classList.add('cactus');
    cactus.style.left=1000+'px';
    background.appendChild(cactus);

    //move o(s) cactus da esquerda para a direita
    let leftToRightInterval = setInterval(() => {
        if(cactusPosition<-60){   
            clearInterval(leftToRightInterval);
            background.removeChild(cactus);
        } else if (cactusPosition>0 && cactusPosition<60 && dinoPosition <60){
            //caso de contato com o dino
            clearInterval(leftToRightInterval);
            document.body.innerHTML= '<h1 class="game-over">G A M E    O V E R  </h1>';
        }  else {
            //aumentar velocidade conforme o tempo pas sa?
            cactusPosition -=10;
            cactus.style.left = cactusPosition+'px';
        }
    },20);
    //geração recursiva de cactus em intervalos pseudo aleatórios 
    setTimeout(createCactus, randomTime);
}


createCactus();
document.addEventListener('keyup', (event) => {
    if(event.code  === 'Space' || event.key===' ' || event.keyCode ===32){
        if(!isJumping)
            jump();
        //console.log('pressionou espaço.');
    }
});

    