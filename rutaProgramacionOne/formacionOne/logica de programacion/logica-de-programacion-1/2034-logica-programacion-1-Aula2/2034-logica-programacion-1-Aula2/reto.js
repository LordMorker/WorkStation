// variable reto 1
diaUsuario = prompt("qué día de la semana es?");
//condición para determinar si es fin de semana 
if (diaUsuario == "sábado"){
    alert("¡Buen fin de semana!");
} else if (diaUsuario == "domingo"){
    alert("¡Buen fin de semana!");
} else {
    //si la opción es un valor diferente a la condición determinara que es un dia de la semana
    alert("¡Buena semana!");
}

// variable reto 2
numeroUsuario = prompt("elige un numero para determinar si es positivo o negativo");
//condición para determinar si el numero es positivo o negativo
if (numeroUsuario > 0){
    alert("el numero que elegiste es positivo");
} else if (numeroUsuario < 0){
    alert("el numero que elegiste es negativo");
} else {
    alert("haz elegido el numero 0");
}

//variable reto 3
puntos = 10;
//condición para determinar si la puntuación es la suficiente para ganar 
if (puntos >= 100){
    console.log("¡Felicidades, has ganado!");
} else {
    console.log("Inténtalo nuevamente para ganar.");
}

//variable reto 4 
saldoCuenta = 1000;
console.log(`el saldo de tu cuenta es: ${saldoCuenta}`)

//variable reto 5
nombreDeUsuario = prompt("cual es tu nombre?");
alert(`bienvenido ${nombreDeUsuario}!`);
