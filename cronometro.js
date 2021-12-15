var temp;
var iniciado = false;

const iniciar = (boton,textoContador) => {
    
    if(!iniciado){
        iniciado = true;
        boton.innerHTML = 'Iniciado' ;
        temp = setInterval(sumaSegundo,1000,textoContador);
    }
   
}

const reset = (botonIniciar,botonParar,textoContador) => {

    if(window.confirm('¿Desea Resetear el cronómetro?')){
        clearInterval(temp);
        botonIniciar.innerHTML = 'Iniciar' ;
        botonParar.innerHTML = 'Parar' ;
        textoContador.innerHTML = '0';
        iniciado = false;
    }
}

const sumaSegundo = (textoContador) => {
    textoContador.innerHTML = parseInt(textoContador.innerHTML) + 1;
}

function parar(boton,textoContador){
    if(iniciado){
        if(boton.innerHTML == 'Parar'){
            boton.innerHTML = 'Continuar';
            clearInterval(temp);
        }else{
            boton.innerHTML = 'Parar';
            temp = setInterval(sumaSegundo,1000,textoContador);
    
        }
    }
}