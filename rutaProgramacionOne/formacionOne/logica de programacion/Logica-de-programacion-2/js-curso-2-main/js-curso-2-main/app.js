//variable reto 1
//utilizando el método document.querySelector podremos seleccionar un objeto del archivo html para modificar la funcionalidad de este, en este caso agregamos un string a la variable titulo que esta conectada a la etiqueta h1 del html.
let titulo = document.querySelector(`h1`);
titulo.innerHTML = "Hora del Desafío";
//variable reto 2
//en este bloque creamos una función que esta conectada al html por el método onclick a nuestro javaScript con este método al dar click de activa la función que este caso lanza un alert indicando el string escrito el cual es "El botón fue clicado".
function clickBotónConsole() {
    console.log("El botón fue clicado!");
};
//variable reto 3
//teniendo en cuenta lo anterior, en este bloque se utiliza una función para cuando se de click en el botón prompt se ejecute un prompt solicitando ingresar un dato especifico en este caso una ciudad de brasil y retornando un alert con un mensaje y el resultado de del dato que nos dio el usuario en una variable
function clickBotónPrompt() {
    let ciudadUsuario = prompt('indica una ciudad de brasil');
    alert(`Estuve en ${ciudadUsuario} y me acordé de ti`);
};
//variable reto 4
// en este bloque se ejecuta lo mismo que en el reto 2 solo que el alert indica un string diferente el cual es "Yo amo JS".
function clickBotónAlert() {
    alert("Yo amo JS");
}; 
//variable reto 5 
//en este bloque solicita dos datos numéricos con prompt para realizar una suma y lanza un alert indicando el resultado de la suma de las variables.
function clickBotónSuma() {
    let numero1 = parseInt(prompt('Dame un numero:'));
    let numero2 = parseInt(prompt('Dame otro numero:'));
    alert(`la suma de ${numero1} + ${numero2} es `+ (numero1 + numero2));
};

