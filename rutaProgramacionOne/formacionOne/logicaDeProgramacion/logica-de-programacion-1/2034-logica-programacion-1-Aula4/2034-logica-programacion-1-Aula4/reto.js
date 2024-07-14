//variable reto 1
//en este bloque se imprime en consola un mensaje de bienvenida
mensajeDeBienvenida = "Bienvenido a este ejemplo de reto";
console.log(mensajeDeBienvenida);
//variable reto 2
//en este bloque se imprime en consola un saludo concatenada con la variable nombre 
nombre = "Andres";
console.log(`Hola, ${nombre}!`);
//reto 3
alert(`Hola, ${nombre}!`);
//variable reto 4
//en este bloque se imprime en consola la opción ingresada por el usuario en base al lenguaje que mas le gusta 
lenguajePreferido = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguajePreferido);
//variable reto 5
valor1 = 3;
valor2 = 5;
//en esta variable se realiza una suma de los valores de arriba que hacen parte del reto 5
resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
//variable reto 6
valor1 = 5;
valor2 = 4;
//en esta variable se realiza una resta de los valores de arriba que hacen parte del reto 6
resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);
//variable reto 7
edadUsuario = prompt("Por favor ingresa tu edad:");
//este bloque me indica si la edad ingresada por el usuario es de una persona mayor o menor de edad
if (edadUsuario >= 18) {
    console.log("Eres mayor de edad!!");
} else {
    console.log("Eres menor de edad!!");
}
//variable reto 8
numero = parseFloat(prompt("Ingresa un número:"));
//este bloque me indica si el numero ingresado por el usuario es positivo, negativo o es 0
if (numero > 0) {
    console.log("tu numero es positivo");
} else if (numero < 0) {
    console.log("tu numero es negativo");
} else {
    console.log("tu numero es 0");
}
//variable reto 9
let contador = 1;
//este bloque genera un bucle para contar de 1 a 10
while (contador <= 10) {
    console.log(contador);
    contador++;
}
//variable reto 10
nota = 7;
//en este bloque se determina si el valor de la variable nota del reto 10 el mayor o igual a 7 ya que esta es la nota minima para aprobar de lo contrario reprobo 
if (nota >= 7) {
    console.log("Aprobado!!")
} else {
    console.log("reprobado!!")
}
//variable reto 11
//en esta variable utilizamos el método Math.random(); que se usa para generar un numero semi-aleatorio entre 0 y 1 
numeroAleatorio = Math.random();
console.log(numeroAleatorio);
//variable reto 12 
//en esta variable utilizamos el método Math.floor(); se encarga de quitar los decimales y redondear hacia el numero inferio y Math.random(); que se usan para generar un numero "aleatorio" entre 1 y 10
numeroAleatorio = Math.floor(Math.random()*10)+1;
console.log(numeroAleatorio);
//variable reto 13
//en esta variable añadimos el método parseInt que determina que el tipo de dato es numérico y que es un numero entero y lo que realizamos es buscar un numero "aleatorio" ente 1 y 1000
numeroAleatorio = parseInt(Math.floor(Math.random()*1000)+1);
console.log(numeroAleatorio);
