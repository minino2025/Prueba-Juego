let y=200;
let velocidad=0;
let Jugador=document.getElementById("Jugador");
let Play= false;

let TuboArriba=document.getElementById("TuboArriba");
let TuboArriba2=document.getElementById("TuboArriba2");
let TuboArriba3=document.getElementById("TuboArriba3");

let F1=document.getElementById("Fondo1");
let F2=document.getElementById("Fondo2");
let xTubo=window.innerWidth;
let xTubo2=window.innerWidth+400;
let xTubo3=window.innerWidth+800;
let xTubo4=window.innerWidth+1200;
let xFondo1=0;
let xFondo2=1600;
let espacio=350;
let alturaMinima=0;
let Puntaje=document.getElementById("Puntos");
let Puntos=0;

let sueloY=window.innerHeight-75;

let Ganar=document.getElementById("PuntosObtenidos");
let GameOver=false;
let Muerte=document.getElementById("MensajeMuerte");
let Reinicio=document.getElementById("Reiniciar");

function actualizar(){

    if(!Play){
        return;
    }

//Muerte

    let jugadorRect=Jugador.getBoundingClientRect();
    let TuboArribaRect=TuboArriba.getBoundingClientRect();
    let TuboAbajoRect=TuboAbajo.getBoundingClientRect();

    let TuboArribaRect2=TuboArriba2.getBoundingClientRect();
    let TuboAbajoRect2=TuboAbajo2.getBoundingClientRect();

    let TuboArribaRect3=TuboArriba3.getBoundingClientRect();
    let TuboAbajoRect3=TuboAbajo3.getBoundingClientRect();

    let TuboArribaRect4=TuboArriba4.getBoundingClientRect();
    let TuboAbajoRect4=TuboAbajo4.getBoundingClientRect();



    if(
        jugadorRect.left<TuboArribaRect.right &&
        jugadorRect.right>TuboArribaRect.left &&
        jugadorRect.top<TuboArribaRect.bottom &&
        jugadorRect.bottom>TuboArribaRect.top
    ){
        GameOver=true;
        Muerte.style.display="flex";
        Ganar.textContent="Has ganado "+(Puntos*10)+" AlePuntos";
    }

    
    if(
        jugadorRect.left<TuboAbajoRect.right &&
        jugadorRect.right>TuboAbajoRect.left &&
        jugadorRect.top<TuboAbajoRect.bottom &&
        jugadorRect.bottom>TuboAbajoRect.top
    ){
        GameOver=true;
        Muerte.style.display="flex";
        Ganar.textContent="Has ganado "+(Puntos*10)+" AlePuntos";
    }

    if(
        jugadorRect.left<TuboArribaRect2.right &&
        jugadorRect.right>TuboArribaRect2.left &&
        jugadorRect.top<TuboArribaRect2.bottom &&
        jugadorRect.bottom>TuboArribaRect2.top
    ){
        GameOver=true;
        Muerte.style.display="flex";
        Ganar.textContent="Has ganado "+(Puntos*10)+" AlePuntos";
    }

    
    if(
        jugadorRect.left<TuboAbajoRect2.right &&
        jugadorRect.right>TuboAbajoRect2.left &&
        jugadorRect.top<TuboAbajoRect2.bottom &&
        jugadorRect.bottom>TuboAbajoRect2.top
    ){
        GameOver=true;
        Muerte.style.display="flex";
        Ganar.textContent="Has ganado "+(Puntos*10)+" AlePuntos";
    }

    if(
        jugadorRect.left<TuboArribaRect3.right &&
        jugadorRect.right>TuboArribaRect3.left &&
        jugadorRect.top<TuboArribaRect3.bottom &&
        jugadorRect.bottom>TuboArribaRect3.top
    ){
        GameOver=true;
        Muerte.style.display="flex";
        Ganar.textContent="Has ganado "+(Puntos*10)+" AlePuntos";
    }

    
    if(
        jugadorRect.left<TuboAbajoRect3.right &&
        jugadorRect.right>TuboAbajoRect3.left &&
        jugadorRect.top<TuboAbajoRect3.bottom &&
        jugadorRect.bottom>TuboAbajoRect3.top
    ){
        GameOver=true;
        Muerte.style.display="flex";
        Ganar.textContent="Has ganado "+(Puntos*10)+" AlePuntos";
    }

    if(
        jugadorRect.left<TuboArribaRect4.right &&
        jugadorRect.right>TuboArribaRect4.left &&
        jugadorRect.top<TuboArribaRect4.bottom &&
        jugadorRect.bottom>TuboArribaRect4.top
    ){
        GameOver=true;
        Muerte.style.display="flex";
        Ganar.textContent="Has ganado "+(Puntos*10)+" AlePuntos";
    }


    if(GameOver){
        return;
    }

    























//Caida Jugador    

    velocidad+=1;
    y+=velocidad;
    Jugador.style.top=y+"px";

    if(y+297>= sueloY){
        y=sueloY-297;
        velocidad=0;
    }

//Tubos

    xTubo-=5
    xTubo2-=5
    xTubo3-=5
    xTubo4-=5


//Tubo1
    TuboArriba.style.left=xTubo+"px";
    TuboAbajo.style.left=xTubo+"px";

    if(xTubo < -80){
    xTubo =window.innerWidth;

    let alturaMaxima=window.innerHeight-alturaMinima-espacio;

    let alturaArriba=Math.random()*(alturaMaxima-alturaMinima)+alturaMinima;

    TuboArriba.style.height=alturaArriba+"px";

    let alturaAbajo=window.innerHeight-alturaArriba-espacio;
    TuboAbajo.style.height=alturaAbajo+"px";
   
    Puntos++;
    Puntaje.textContent="Puntos: "+Puntos;
}
//Tubo2
    TuboArriba2.style.left=xTubo2+"px";
    TuboAbajo2.style.left=xTubo2+"px";

    if(xTubo2 < -80){
    xTubo2 =window.innerWidth;

    let alturaMaxima=window.innerHeight-alturaMinima-espacio;

    let alturaArriba=Math.random()*(alturaMaxima-alturaMinima)+alturaMinima;

    TuboArriba2.style.height=alturaArriba+"px";

    let alturaAbajo=window.innerHeight-alturaArriba-espacio;
    TuboAbajo2.style.height=alturaAbajo+"px";

    Puntos++;
    Puntaje.textContent="Puntos: "+Puntos;

    }
//Tubo3
    TuboArriba3.style.left=xTubo3+"px";
    TuboAbajo3.style.left=xTubo3+"px";

    if(xTubo3 < -80){
    xTubo3 =window.innerWidth;

    let alturaMaxima=window.innerHeight-alturaMinima-espacio;

    let alturaArriba=Math.random()*(alturaMaxima-alturaMinima)+alturaMinima;

    TuboArriba3.style.height=alturaArriba+"px";

    let alturaAbajo=window.innerHeight-alturaArriba-espacio;
    TuboAbajo3.style.height=alturaAbajo+"px";

    Puntos++;
    Puntaje.textContent="Puntos: "+Puntos;
}
//Tubo4
    TuboArriba4.style.left=xTubo4+"px";
    TuboAbajo4.style.left=xTubo4+"px";

    if(xTubo4 < -80){
    xTubo4 =window.innerWidth;

    let alturaMaxima=window.innerHeight-alturaMinima-espacio;

    let alturaArriba=Math.random()*(alturaMaxima-alturaMinima)+alturaMinima;

    TuboArriba4.style.height=alturaArriba+"px";

    let alturaAbajo=window.innerHeight-alturaArriba-espacio;
    TuboAbajo4.style.height=alturaAbajo+"px";
   
    Puntos++;
    Puntaje.textContent="Puntos: "+Puntos;
}

//Fondo

    if(xFondo1<=-1600){
        xFondo1=xFondo2+1600;
    }

    if(xFondo2<=-1600){
        xFondo2=xFondo1+1600;
    }


    xFondo1 -=1;
    xFondo2 -=1;

    F1.style.left=xFondo1+"px";
    F2.style.left=xFondo2+"px";
}

setInterval(actualizar,20);

//Salto Jugador

document.addEventListener("keydown", function(event){

    if(!Play){
        Play=true;
    }

    if(event.code==="Space"){
        velocidad=-15;
    }

});

//Reiniciar

Reinicio.addEventListener("click", function(){
    location.reload();    
});