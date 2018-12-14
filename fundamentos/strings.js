const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))       //retorna em branco quando não existe character
console.log(escola.charCodeAt(3))   //unicode do character na posição 3
console.log(escola.indexOf('3'))    //procura se existe o character '3'

console.log(escola.substring(1))    //pegar o valor do tipo string a partir do char 1
console.log(escola.substring(0, 3)) //pegar os chars da posição 0 até 3

console.log('Escola '.concat(escola).concat("!"))   //contatena a string 'Escola' com a constante escola e a String "!"
console.log('Escola' + escola + "!")    //outra forma de contatenar
console.log(escola.replace(/\d/, 'e'))  //substitue todos os DIGITOS pela string 'e'
console.log(escola.replace(/\w/, 'e'))  //substitue todas as letras e digitos, mas nesse caso foi a primeira
console.log(escola.replace(/\w/g, 'e')) //substitue todas as letras e digitos de modo global

console.log('Ana,Maria,Pedro'.split(','))   //quebra a string em um array