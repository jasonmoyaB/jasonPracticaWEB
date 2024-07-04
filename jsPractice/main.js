//FUNCION ALERT
/*
alert("Hola");
["Bienvenido a", "PracticeJMB"].forEach(alert);

*/
//mostrar msj en consola
//console.log("Introduccion a js");


/*
let username;
username="jason";
console.log(username);
*/

//PEDIR DATOS AL USER

/*
let username;
let userage;
let birthYear;

username=prompt("Ingresa tu nommbre")
userage=prompt("Ingresa tu edad")
birthYear= 2024- userage;

document.write(`tu edad es  ${userage}, que disfrutes,naciste en ${birthYear}.Tu nombre:${username}`);
*/

//OPERADORES ARITMETICOS
/*
let operando1=3;
let operando2=2
let operando;

resultado = operando1+operando2;
resultado = operando1-operando2;
resultado = operando1/operando2;
resultado = operando1*operando2;

console.log(resultado);
*/

//OPERADORES DE ASIGNACION
/*
let resultado = 5;
resultado *=5;
console.log(resultado);
*/

//OPERADORES DE COMPARACION
/*
console.log(2<3);
*/

/*USO DEL SWITCH

let numDia=prompt("ingrese el numero de dia ");

switch (numDia) {
    case '1':
        document.write(`<h1>tu dia es lunes</h1>`);
        break;
    case '2':
        document.write(`<h1>tu dia es martes</h1>`);
        break;
    case'3':
    document.write(`<h1>tu dia es miercoles</h1>`);
        break;
    case '4':
        document.write(`<h1>tu dia es jueves</h1>`);
        break;
    case '5':
        document.write(`<h1>tu dia es viernes</h1>`);
        break;
    default:
        document.write(`<h1>numero equivocado</h1>`);    
}
*/

//USO DEL WHILE y switch MENU 
 /*let opcion=0;

 while (opcion!=4) {
    //mostrar menu de opciones
    opcion=parseInt(prompt("Menú de Opciones:\n1- PARA TELEFONO JASON\n2- PARA TELEFONO WALTER\n3- PARA TELEFONO ASHLEY\n4- SALIR"))
    
    //manejo la opcion que se selecciono
    switch (opcion) {
        case 1:
            document.write("<h1>Teléfono de Jason: 86232314</h1>");
            break;
        case 2:
            document.write("<h1>Teléfono de Walter: 84973040</h1>");
            break;
        case 3:
            document.write("<h1>Teléfono de Ashley: 70167855</h1>");
            break;
        case 4:
            document.write("<h1>Has salido</h1>");
            break;
        default:
            document.write("<h1>Opción no válida. Por favor, elige una opción del 1 al 4.</h1>");
    }
 }

*/


//USO DEL FOR
// Crear un array de nombres
/*
let estudiantes=["jason","pepe","pamela","julian"];

for(let i=1; i=estudiantes.length; i++){
    console.log(`nombres:`+estudiantes[i]);

}
*/

//CALCULADORA
/*
// Solicitar el primer número al usuario y convertirlo a un número entero
let num1 = parseInt(prompt("Digite el primer número:"));
let num2 = parseInt(prompt("Digite el segundo número:"));
let operacion;
let resultado;

// Solicitar la operación al usuario y convertirla a minúsculas
let opcion = (prompt("¿Qué desea hacer?\n Sumar\n Restar\n Multiplicar\n Dividir\n ESCOJA:")).toLowerCase();

// Realizar la operación basada en la entrada del usuario
if (opcion == "sumar") {
    operacion = num1 + num2;
    console.log(`La suma es: ${operacion}`);
} else if (opcion == "restar") {
    operacion = num1 - num2;
    console.log(`La resta es: ${operacion}`);
} else if (opcion == "multiplicar") {
    operacion = num1 * num2;
    console.log(`La multiplicación es: ${operacion}`);
} else if (opcion == "dividir") {
    if (num2 != 0) {
        operacion = num1 / num2;
        console.log(`La división es: ${operacion}`);
    } else {
        console.log("Error: División por cero");
    }
} else {
    console.log("Opción no válida");
}
*/
//ruleta
/*
//con esto se genera el random
let numSecreto = Math.floor(Math.random() * 10) + 1;

let userNum,intentos=0;

//menu para pedir el numero al usuario
while (userNum!=numSecreto) {
    userNum=parseInt(prompt("digite su numero entre 1 al 10"));
    intentos++;
}
if (userNum<numSecreto) {
    alert("el numero es mayor");
}
else if(userNum>numSecreto){
    alert("el numero es menor");
}
else if(userNum==numSecreto){
    alert(`has ganado el numero era ${userNum} en solo ${intentos} intentos`);
}
else{
    alert("intente de nuevo");
}

*/

//MAS FACIL ADIVINAR
/*
let userNum;
numSecreto = Math.floor(Math.random()*10)+1;
while (numSecreto!=userNum) {
    userNum = parseInt(prompt("digite un numero del 1 al 10"));

if (userNum==numSecreto) {
    alert(`has ganado el numero era ${userNum}`);
}
}
*/









