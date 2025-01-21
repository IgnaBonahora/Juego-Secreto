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



/*
// Ejercicios Adicionales Clase 2 
//Ejercicio1 
function holaMundo(){
   console.log("Hola mundo");
}
holaMundo();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio2
function holaName(nombre){
   console.log("Hola, " + nombre)
}
holaName("Azul");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 3
function dobleDeUnNumero(numero){
   numero = 2 * numero ; 
   return numero;
}
let numero = generarNumeroSecreto();
console.log(numero);
console.log(dobleDeUnNumero(numero));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 4
function promedio3Numeros( a , b , c ){
   return  ((a + b + c)/3);
}
let numero1 =generarNumeroSecreto();
let numero2 =generarNumeroSecreto();
let numero3 =generarNumeroSecreto();
console.log(numero1, numero2, numero3);
console.log(promedio3Numeros(numero1, numero2, numero3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 5
function maxEntre2Num( a, b){
   if (a >= b){
      return a ;
   }else{
      return b; 
   }
}
function maxEntre3Num( a, b , c){
   return  maxEntre2Num(maxEntre2Num(a,b), c);
}

let num1 = generarNumeroSecreto();
let num2 = generarNumeroSecreto();
let num3 = generarNumeroSecreto();
console.log(num1 , num2 , num3);
console.log(maxEntre3Num( num1, num2, num3));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 6 
function cuadradoDeUnNumero(a){
   return a*a;
}
let numeroA = generarNumeroSecreto();
console.log(numeroA)
console.log(cuadradoDeUnNumero(numeroA));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ejercicios adicionales clase 3 
//Ejercicio 1
//formula imc = peso / (altura*altura)
function imc (peso , altura){
   return peso/(altura*altura);
}
 console.log(imc(150, 1.94));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 2
//Puedo resolverlo recursivamente 

function factorial(num){
   if (num > 1 ){
      return num * factorial(num-1);   
   }else{
      return 1;
   }
}
console.log(factorial(7));

//Sino con un ciclo 
function factorial2(a){
   let b = 1 ; 
   let resultado = 1; 
   while (b <= a){
      resultado = (resultado * b);
      b++ ;
   }
   return resultado; 
}
console.log(factorial2(7))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 3
let valorConversionBrasil = 4.80;
let valorConversionArgentina = 1045;
function conversionDolarAMoneda(a){
   return a*valorConversionArgentina
}
console.log(conversionDolarAMoneda(100));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 4
function areaSala( a, b){
   return a*b;
}
function perimetroSala(a,b){
   return ((2*a) + (2*b));
}
let area = areaSala(4,5);
let perimetro = perimetroSala(4,5);
console.log("El area de la sala es " + area +" metros cuadrados y el perimetro de la sala es " + perimetro + "  metros");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 5
function areaCirculo(r){
  // return 2*r*Math.PI ; con pi de la libreria math 
  return 2*3.14*r
}
console.log(Math.PI);
let radio = parseInt(prompt("Ingrese el radio de su sala circular: "));
alert(`El area de su sala circular es de ${areaCirculo(radio)} metros cuadrados `);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 6
function tablaMultiplicar( a, b){
   let cont = 1 ;
   while ( cont <= b){
      let res = a * cont
      console.log(a +" x " + cont + " = " + res);
      cont++; 
   }
}
let a = parseInt(prompt("Ingrese el numero a multiplicar: "));
let b = parseInt(prompt("Ingrese el limite de la tabla de multiplicar: "));
tablaMultiplicar(a,b);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ejercicios Adicionales Clase 4
//Ejercicio Crea una lista vacía llamada "listaGenerica".
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let listaGenerica = [];
//Ejercicio Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let lenguajesDeProgramacion = ["Javascript","C", "C++","Kotlin", "Phyton"]
//Ejercicio Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push("Java");
lenguajesDeProgramacion.push("Ruby");
lenguajesDeProgramacion.push("GoLang");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista(){
   let indice = 0 ; 
   while(indice < lenguajesDeProgramacion.length) {
      console.log(lenguajesDeProgramacion[indice]);
      indice++;
   }
}
mostrarLista();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EjercicioCrea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarListaInversa(){
   let indice = lenguajesDeProgramacion.length;
   while (indice >0){
      indice-- ; 
      console.log(lenguajesDeProgramacion[indice]);
   }
}
mostrarListaInversa();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio Crea una función que calcule el promedio de los elementos en una lista de números.
function sumaLista(array){
   let indice = 0;
   let suma = 0
   while(indice < array.length){
      suma = suma + array[indice];
      indice++;
   }
   return suma ; 
}
function promedioLista(array){
   console.log (sumaLista(array )/ array.length);
}
let listaNumerica = [3,5,7,2];
promedioLista(listaNumerica);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMaximoYMinimo(array){
   let maximo = mostrarMaximo(array);
   console.log(maximo);
   let minimo = mostrarMinimo(array);
   console.log(minimo);
}

function mostrarMaximo(array) {
   let indice = 0 ; 
   let maximo = 0;
   while ( indice < array.length){
      if(array[indice] > maximo){
         maximo = array[indice]
      }
      indice++; 
   }
   return maximo;
}
function mostrarMinimo(array) {
   let indice = 1 ; 
   let minimo = array[0];
   while ( indice < array.length){
      if(array[indice] < minimo){
         minimo = array[indice]
      }
      indice++; 
   }
   return minimo;
}
mostrarMaximoYMinimo(listaNumerica);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(array){
   let indice = 0;
   let suma = 0
   while(indice < array.length){
      suma = suma + array[indice];
      indice++;
   }
   return suma ; 
}
console.log(sumaLista(listaNumerica));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function incluidoEnLaLista(array , elemento) {
   if (array.includes(elemento)){
      return array.indexOf(elemento) ; 
   }else{
      return -1; 
   }
}
console.log(incluidoEnLaLista(listaNumerica , 4));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let listaNumerica2 = [ 4 ,6,9,1];
function sumaLista1A1(array1, array2) {
   if(array1.length == array2.length){
      let sumaLista = [];
      let indice = 0 ; 
      while(indice < array1.length){
         sumaLista.push( array1[indice] + array2[indice]);
         indice++;
      }
      return sumaLista; 
   }
}
console.log(sumaLista1A1(listaNumerica, listaNumerica2));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadrodoDeLaLista(array){
   let listaDeCuadrados = [];
   let indice = 0 ; 
   while(indice < array.length){
      listaDeCuadrados.push((array[indice])* (array[indice]));
      indice++; 
   }
   return listaDeCuadrados
}
console.log(listaNumerica);
console.log(cuadrodoDeLaLista(listaNumerica));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/