/** novo recurso do ES2015
 * 
 * Desestruturação a partir de um OBJETO
 * 
 */
 

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
    }
}

const{ nome, idade } = pessoa
console.log(nome, idade)    // Ana 5

const{ nome: n, idade: i } = pessoa // foi atribuido para a const pessoa que n é nome e i é idade
console.log(n, i)           // Ana 5

const { endereco: { logradouro, numero, cep } } = pessoa    // cep será undefined
console.log(logradouro, numero, cep)