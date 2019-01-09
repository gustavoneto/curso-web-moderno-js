var a = 3
let b = 4

var a = 30
//let b = 40 não é possível redefinir uma variável utilizando let
b = 40 // Utilizando 'var' pode-se mudar o valor da variável

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 30 constante não se muda o valor
console.log(c) 