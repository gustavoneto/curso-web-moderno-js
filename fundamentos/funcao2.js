// Armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // Soma a + b

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {    // Essa setinha substitui o nome 'function'
    return a + b
}

console.log(soma(2, 3))

// Retorno implicito
const subtracao = (a, b) => a - b   //utilize este conceito para criar uma função de uma única linha
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')