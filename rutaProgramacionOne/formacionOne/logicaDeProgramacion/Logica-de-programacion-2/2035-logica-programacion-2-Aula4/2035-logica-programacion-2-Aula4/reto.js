//reto 1 lista vacía.
let listaGenérica = [];
//reto 2 lista de lenguajes de programación
let lenguajesDeProgramación = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//reto 3 añadiendo elementos a la lista anterior
lenguajesDeProgramación.push('Java', 'Ruby', 'GoLang');
//reto 4 función que muestra en consola los elementos por separado de la lista(array) lenguajes de programación.
function mostrarLenguajes() {
    for (let i = 0; i < lenguajesDeProgramación.length; i++) {
        console.log(lenguajesDeProgramación[i]);
    }
};
mostrarLenguajes();
//reto 5 función que muestra en consola los elementos por separado de la lista(array) lenguajes de programación en orden inverso.
function mostrarLenguajesInverso() {
    for (let i = lenguajesDeProgramación.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramación[i]);
    }
};
mostrarLenguajesInverso();
//reto 6 función que calcula el promedio en una lista de numeros.
function calcularPromedio(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
    }
    return suma / lista.length;
};
let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
console.log(`El promedio es ${promedio}`);
//reto 7 función para encontrar el numero mayor y el numero menor de una lista.
function encontrarMayorYMenor(lista) {
    const mayor = Math.max(...lista);
    const menor = Math.min(...lista);
    return { mayor, menor };
}

const listaDeNumeros = [15, 19, 11, 9, 20, 7, 4];
const { mayor, menor } = encontrarMayorYMenor(listaDeNumeros);
console.log(`El número mayor es: ${mayor} y el número menor es: ${menor}`);
//reto 8 función para obtener el resultado de la suma de los elementos de un array.
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
    }
    return suma;
};
let listaDeSuma = [1, 2, 3, 4, 5];
let suma = calcularSuma(listaDeSuma);
console.log(`El resultado de la suma es: ${suma}`);
//reto 9 función en la que me retorna el index si el numero del parámetro conside con alguno de los elementos de lista de lo contrario retorna -1.
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
        }
    } 
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
};
let listaDeNumeros2 = [1, 2, 3, 4, 5];
let elemento = 3;
let indice = encontrarIndiceElemento(listaDeNumeros2, elemento);
console.log(`El índice del elemento ${elemento} es: ${indice}`);
//reto 10 función que suma uno a uno los elementos de dos listas del mismo tamaño.
let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];
function sumarListas() {
    let listaSumada = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSumada.push(lista1[i] + lista2[i]);
        }
    console.log(listaSumada);
    return;
};
sumarListas();
//reto 11 función que recibe una lista de numeros y retorna una nueva lista con el valor al cuadrado de la anterior.
let listaDeNumerosParaCuadrado = [1, 2, 3, 4];
function cuadradoDeNumeros() {
    let listaCuadrada = [];
    for (let i = 0; i < listaDeNumerosParaCuadrado.length; i++) {
        listaCuadrada.push(Math.pow(listaDeNumerosParaCuadrado[i], 2));
        }
        console.log(listaCuadrada);
        return;
};
cuadradoDeNumeros();


//aparir de aquí se repetirán algunos de los retos con diferentes soluciones un poco mas modernas y con nuevas características sugeridas por GPT.


//reto 6 resuelto de una manera moderna con un método para arrays llamado reduce. 
function calcularPromedio(lista) {
    const suma = lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / lista.length;
};
numeros = [10, 20, 30, 40, 50];
promedio = calcularPromedio(numeros);
console.log(`El promedio es ${promedio}`);
//reto 8 resuelto de una manera moderna y añadiendo la característica de saber si el array es null o esta vació.
function calcularSuma(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return 0; // Devuelve 0 si lista no es un array o está vacío
    }
    return lista.reduce((suma, numero) => suma + numero, 0);
};
listaDeSuma = [1, 2, 3, 4, 5];
suma = calcularSuma(listaDeSuma);
console.log(`El resultado de la suma es: ${suma}`);
//reto 9 es una manera moderna y concisa de la solución en la cual se añaden nuevas características.
function encontrarIndiceElemento(lista, elemento) {
    // Validar que lista sea un array
    if (!Array.isArray(lista)) {
        throw new Error('El primer parámetro debe ser un array');
    }
    // Utilizar indexOf para buscar el índice del elemento
    const indice = lista.indexOf(elemento);
    return indice;
}
// Ejemplo de uso
listaDeNumeros2 = [1, 2, 3, 4, 5];
elemento = 3;
indice = encontrarIndiceElemento(listaDeNumeros2, elemento);

if (indice !== -1) {
    console.log(`El índice del elemento ${elemento} es: ${indice}`);
} else {
    console.log(`El elemento ${elemento} no se encuentra en la lista`);
}
