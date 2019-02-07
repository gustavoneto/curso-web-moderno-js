/**
 * String é uma cadeia de caracteres que pode ser delimitado por 3 simbolos:
 * Aspas, aspas duplas e a partir do ES2015 pode-se usar crase para quando for
 * precisar de template string (templateString.js).
 */

const escola = "Cod3r"
let charNaoExiste = escola.charAt(5)


console.log('CharAt(4) de Cod3r = ' + escola.charAt(4)) // retorna a letra no índice 4
console.log('charAt(5) de Cod3r (não existe) = ' + escola.charAt(5)) // retorna em branco quando não existe character
console.log('Tipo de um char que não existe é = ' + typeof charNaoExiste)
console.log('Valor da tabela unicode da 3ª posição de Cod3r = ', escola.charCodeAt(3)) // unicode do character na posição 3
console.log('O digito 3 está em Cod3r na posição = ' + escola.indexOf('3')) // procura se existe o character '3' e retorna a posição

console.log()
console.log(escola.substring(1))    // pegar o valor do tipo string a partir do char 1
console.log(escola.substring(0, 3)) // pegar os chars da posição 0 até 3

console.log('Escola '.concat(escola).concat("!")) // contatena a string 'Escola' com a constante escola e a String "!"
console.log('Escola' + escola + "!") // outra forma de contatenar
console.log('Substitui todos os digitos (números) de Cod3r pela letra e =', escola.replace(/\d/, 'e')) // substitue todos os DIGITOS pela string 'e'
console.log(escola.replace(/\w/, 'e')) // substitue todas as letras e digitos, mas nesse caso foi a primeira
console.log(escola.replace(/\w/g, 'e')) // substitue todas as letras e digitos de modo global

console.log()
console.log('Ana,Maria,Pedro'.split(',')) // quebra a string em um array