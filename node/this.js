/**
 * 'this' é um objeto, e sua referência é o module.exports
 * por isso, this sempre irá apontar para 'module.exports',
 * e não somente 'module' ou 'global'.
 * 'exports' é restritamente igual ao 'this' porque exports
 * aponta para a mesma refernência, para o mesmo objeto.
 */


console.log(this === global) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true
console.log()

/**
 * Prestar atenção quando o 'this' está sendo acessado dentro de uma função dentro de um modulo
 * 'exports' dentro de uma função não é restritamente igual ao 'this'.
 * Dentro de uma função, o 'this' aponta para 'global'.
 */ 

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) // false
    console.log(this === module.exports) // false
    console.log(`this === global é ${this === global}`) // true

    // this.perigo = '...' // colocando no escopo global
}

// this.perigo = '...' // retornando no module.exports

logThis()