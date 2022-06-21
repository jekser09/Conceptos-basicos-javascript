// tipos de datos
"Hello World" //String
console.log('Hello World'); //String
console.log(1000);          //numero entero(int)
console.log(1000.0);        //numero real/punto flotante (float)
//Boolean
console.log(true);
console.log(false);
//Array
console.log(['joe','marta','ryan']);
console.log([1,2,3,4,5]);
console.log([true,false]);
//object
console.log({"userName": 'ryan',
 "score": 70.4,
 "hours": 14,
 "professional": true,
 "friends":['andres','carlos','daniel']});
// variables
var nombre = "esteban";
console.log(nombre);
let apellido = "rodriguez";
console.log(apellido);
var puntaje = 700;
console.log(puntaje);
const genero="masculino"; //Constante
//genero = "Femenino"; no se puede cambiar sale error
console.log(genero);
/*
Reglas
las variables no puede empezar con @ o numeros
(ejemplo: let 1variable = 1; (incorrecto))
*/
/*
Operadores: +, -, *, /, (concatenar strings con '+')
compartivos: >(mayor), <(menor), ==(igual), !=(diferente), <=(menor igual),>=(mayor igual)
extras: ===(igualdad estricta, se evaluaran hasta los tipos de las variables),
        Object.is (Funciona como el '===' pero tambien se podra evaluar "NaN,-0 y +0").
*/
//Condicionales
let contraseña = 123;
let clave = 123;
if(contraseña == clave){
    console.log("correcto");
}else{
    console.log("incorrecto");
}
/*if(contraseña === clave){
    console.log("correcto");
}else{
    console.log("incorrecto")
}*/
//Condicional si 
var puntaje=70;
if(puntaje>=70){
    console.log("Felicidades");
}else if(puntaje>=35 && puntaje<70){
    console.log("Puedes mejorar");
}else{
    console.log("Mira este tutorial");
}
//switch
var x=0;
switch(x){
    case 1:
        console.log("caso 1");
        break;
    case 2:
        console.log("caso 2");
        break;
    case 3:
        console.log("caso 3");
        break;
    default:
        console.log("Cualquier otro caso");
}
//Condicional while
console.log("While")

let contador=0;
while(contador < 0){
    console.log(contador);
    contador++;
}
let nombres=['anna','gian','junior','johand','juliancho','diko']
let contador2=0;
while(contador2 < nombres.length){
    console.log(contador);
    contador++;
}
console.log("For");
//condicional for
for(let i=0;i<nombres.length;i++){
    console.log(nombres[i]);
}

//Funciones
//sin parametros
function saludar(){
    console.log("jelouda");
}
saludar();
//con parametros
let nombreAmigo="harold";
saludarEspecifico(nombreAmigo);
saludarEspecifico("anna");
function saludarEspecifico(saludado){
    console.log("hola "+saludado);
}
// varios parametros
let amigo1="juanjo";
let amigo2="daniel";
saludarVarios1(amigo1,amigo2);
saludarVarios1("pana1","pana2");
function saludarVarios1(persona1,persona2){
    console.log("Hola "+persona1+" y "+persona2);
}
//Funcion que retorna algo
let numero1=30;
let numero2=40;
function suma(num1,num2){
    return num1+num2;
}
var resultado=suma(numero1,numero2);
console.log(resultado);
//otro ejemplo
let numero3=230;
let numero4=570;
function multiplicar(num1,num2){
    return num1*num2;
}
console.log(multiplicar(numero3,numero4));