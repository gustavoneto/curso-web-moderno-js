// Usando com OBJETO

function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))   // passando com objeto vazio
console.log(rand()) //irá gerar um erro pois está desestruturando o limite entre 0 e 1000
