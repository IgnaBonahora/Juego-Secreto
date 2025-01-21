let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function condicionesIniciales(){
   asignarTextoElemento("h1", "Juego del Numero Secreto");
   asignarTextoElemento("p", `Escoge un numero entre 1 y ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}

condicionesIniciales();

function asignarTextoElemento(elemento, texto){
   let elementoHTMl = document.querySelector(elemento);
   elementoHTMl.innerHTML = texto ;
   return;
}

function verificarIntento(){
   let numeroUsuario = parseInt(document.getElementById("valorUsuario").value); 
   console.log(intentos);
   if(numeroUsuario === numeroSecreto){
      asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos ===1) ? "intento" : "intentos"}`);
      document.getElementById("reiniciar").removeAttribute("disabled");
   }else{
      if(numeroUsuario > numeroSecreto){
         asignarTextoElemento("p", "El numero secreto es menor");
      }else{
         asignarTextoElemento("p", "El numero es mayor");
      }
      limpiarCaja();
      intentos++ ;
   }
   return;
}


function limpiarCaja(){
   document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) +1;
   //Si ya sortemaos todos los numeros, generamos la salida del juego 
   if (listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento("p","Ya se insertaron todos los numeros " )
   }else{ 
      //Si el numero generado ya fue sorteado debo realizar de nuevo el sorteo, sino lo aagrego a la lista y y juego normal
      if(listaNumerosSorteados.includes(numeroGenerado)){
         return generarNumeroSecreto();
      }else{
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
   }
}

function reiniciarJuego(){
   limpiarCaja();
   condicionesIniciales();
   //Deshabilitar el boton de Nuevo Juego 
   document.querySelector("#reiniciar").setAttribute("disabled", "true")
}


