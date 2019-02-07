let isAtivo = false
console.log('isAtivo é igual a =', isAtivo) // isAtivo é false

isAtivo = true // let deixa mexer no valor da variável
console.log('isAtivo agora é igual a =', isAtivo, '\n') // isAtivo é true

isAtivo = 1 // tipo number
console.log('isAtivo = 1. Com negação, será igual a =', !isAtivo) //coloca negação para ver qual tipo boolean o 1 é, que será true
console.log('isAtivo = 1. Com dupla negação, será igual a =', !!isAtivo)
console.log('Ou seja, o valor numérico 1 é igual ao true do boolean\n')

// Todos os números verdadeiros são true, com EXCEÇÃO do 0
console.log('os verdadeiros...')
console.log(!!3)
console.log(!! -1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 1))
console.log()

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = 0))
console.log()

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // string com 1 caractere de espaço é true, então
                                        // apenas esse será retornado

let nome = '' // vazio é false
// irá retornar o for true
console.log(nome || 'Desconhecido') // retornou 'Desconhecido' porque nome é falso ''

let nome2 = 'Lucas'
console.log(nome2 || 'Desconhecido') // Lucas é true