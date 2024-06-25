//reto 1
//esta función muestra "¡Hola, mundo!" en la consola.
function mostrarHola() {
    console.log('Hola, Mundo!');
    return;
};
//aquí llamamos la función saludo
mostrarHola();
//reto 2
//en esta función añadimos el parámetro nombre para generar un mensaje junto a el nombre proporcionado al llamar la función que se vera retornado en la consola.
function mostrarHolaNombre(nombre) {
    console.log('Hola, '+ nombre);
    return;
};
mostrarHolaNombre('Andres');
//reto 3
//en este bloque se genera una función en donde el parámetro es un numero y en consola se refleja el doble al sumar el mismo valor
function calcularDoble(numero) {
    console.log(numero + numero);
    return;
}
calcularDoble(2);
//reto 4
//en esta función calculamos el promedio de 3 parámetros numéricos y lo retornamos en consola.
function promedio(a, b, c) {
    console.log((a + b + c)/3);
    return;
}
promedio(1, 15, 5);
//reto 5
//en esta función se determina cual de los dos parámetros numéricos es el numero mayor y se retorna en consola
function encontrarNumeroMayor(a, b) {
    return a > b ? a : b;
}
let numeroMayor = encontrarNumeroMayor(5, 7);
console.log(`el numero mayor es ${numeroMayor}`);
//reto 6 
//en esta función generamos la multiplicación de un numero por si mismo que vendría a ser un numero al cuadrado
function cuadrado(numero) {
    console.log(numero * numero);
    return;
}
cuadrado(3);