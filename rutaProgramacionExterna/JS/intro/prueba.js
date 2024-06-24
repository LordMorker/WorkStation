// Función para encriptar texto utilizando el cifrado César
function encriptarTexto(texto, desplazamiento) {
    let textoEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        
        // Aplicar el desplazamiento solo a caracteres alfabéticos
        if (char.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);
            
            // Manejar letras mayúsculas y minúsculas
            if ((codigo >= 65) && (codigo <= 90)) {
                char = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
            } else if ((codigo >= 97) && (codigo <= 122)) {
                char = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
            }
        }
        
        textoEncriptado += char;
    }

    return textoEncriptado;
}

// Ejemplo de uso
let textoOriginal = "Hola Mundo!";
let desplazamiento = 3;
let textoEncriptado = encriptarTexto(textoOriginal, desplazamiento);

console.log("Texto original:", textoOriginal);
console.log("Texto encriptado:", textoEncriptado);
