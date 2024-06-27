//reto 1 
//función para calcular el indicie de masa corporal
function indiceMasaCorporal(altura, peso) {
    let imc = peso / (altura * altura);
    console.log(imc);
}
indiceMasaCorporal(1.65, 59); 
//reto 2 
//función para calcular el valor del factorial de un numero dado como parámetro
function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
        }
        console.log(`el factorial de ${numero} es ${resultado}`);
}
factorial(5);
//reto 3
//función para la conversión de dolares a pesos colombianos
function conversiónDeMoneda(dollar) {
    let tipoDeCambio = 4090.48;
    let pesosColombianos = dollar * tipoDeCambio;
    console.log(`${dollar} dolares son ${pesosColombianos} pesos`);
}
conversiónDeMoneda(100);
//reto 4
//función para calcular el area y el perimetro de un rectangulo e imprimirlo en pantalla.
function calcularAreaPerimetro(altura, ancho) {
    let area = altura * ancho;
    let perimetro = 2 * (altura + ancho);
    return (`el area es ${area} y el perimetro es ${perimetro}`);
};
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};
asignarTextoElemento('p', calcularAreaPerimetro(5, 3));
//reto 5 
//función que calcula el area y perimetro de una circunferencia e imprime en pantalla.
let pi = 3.14
function calcularAreaYPerimetro(radio) {
    let area = pi * (radio * radio);
    let perimetro = 2 * pi * radio;
    return (`el area es ${area} y el perimetro es ${perimetro}`);
}
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};
asignarTextoElemento('.circulo', calcularAreaYPerimetro(5));
//reto 6
//función que muestra en pantalla la tabla de multiplicar el numero dado como parámetro.
function tablaDeMultiplicar(numero) {
    let texto = '';
    for (let i = 0; i <= 10; i++) {
        texto += `${numero} x ${i} = ${numero * i}<br>`
        }
        return texto;
};
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};
asignarTextoElemento('.tabla', tablaDeMultiplicar(5));

