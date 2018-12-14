// Funcao sem retorno
console.log("========== Função sem retorno ==========")
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)     //somar um valor int com um numero indefinido gera um NaN(Not a Number)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)   //soma os dois primeiros e ignora o resto
imprimirSoma()      //somou nenhum número e imprimiu NaN

// Funcao com retorno
console.log("========== Função com retorno ==========")
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))        //por b já está definido, o JS atribuiu o valor 2 para o a
console.log(soma())         //retornou NaN porque o b está definido, mas o a não