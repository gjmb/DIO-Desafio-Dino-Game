const dino = document.querySelector('.dino'); 
const background=document.querySelector('.background'); 
//console.log(dino);

function jump(isJumping){
    let dinoPosition = 0;
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
        } else {
            //aumentar velocidade conforme o tempo passa?
            cactusPosition -=10;
            cactus.style.left = cactusPosition+'px';
        }
    },20);
    //geração recursiva de cactus em intervalos pseudoaleatórios 
    setTimeout(createCactus, randomTime);
}


createCactus();
document.addEventListener('keyup', (event) => {
    if(event.code  === 'Space' || event.key===' ' || event.keyCode ===32){
        let isJumping = false;
        if(!isJumping)
            jump(isJumping);
        //console.log('pressionou espaço.');
    }
});

    