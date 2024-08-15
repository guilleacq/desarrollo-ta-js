function repeatString(texto, repeticiones) {
    for (let i = 0; i < repeticiones; i++) {
        console.log(texto);
    }
}

function reverseString(texto) {
    let currentPos = 0;
    let textoInvertido = [];

    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido[currentPos] = texto[i];
        currentPos++;
    }
    console.log(textoInvertido.join(""));
}

repeatString("hola", 5);
reverseString("holo");