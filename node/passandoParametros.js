/**
 * Passando parâmetro entre módulos.
 * Se um módulo retorna uma função, então pode retornar essa função
 * passando os parâmetros, e o que estiver dentro dele será executado.
 */

// Criando array de nomes
// Método que transforma uma lista de nomes em uma lista de saudação.
module.exports = function(...nomes){ // função que retorna argumento variável, ou quantos nomes quiser
    return nomes.map(nome => `Boa semana, ${nome}!`)
}