const peso1 = 1.0 // um float que é entendido como int, por ser *.0 do tipo NUMBER
const peso2 = Number('2.0') // atribuiu o valor da string para a variável peso2 em tipo NUMBER

console.log(`Valor de "peso1" é = ${peso1}\nValor de "peso2" é = ${peso2}`)
// Se o valor de qualquer das duas variáveis fosse 1.1, então seria FALSE
console.log()
console.log(`O tipo da variável "peso1" é inteiro? ${Number.isInteger(peso1)}`) //para saber se o valor da variável é inteiro
console.log(`O tipo da variável "peso2" é inteiro? ${Number.isInteger(peso2)}`)
console.log()

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(`A média das notas é (sem controle de casas decimais) = ${media}`)
console.log(`A média das notas é (com controle de casas decimais) = ${media.toFixed(2)}`) //2 casas decimais
// toFixed() não altera o valor da variável, pois é constante. Ele só mexe no que ela irá retornar
console.log()
console.log(`O valor de "media" em String é = ${media.toString()}`) //exibir em valor string
console.log(`O valor de "media" em binário é = ${media.toString(2)}`) //exibir em valor binário
console.log(`O tipo do valor "media" é = ${typeof media}`)