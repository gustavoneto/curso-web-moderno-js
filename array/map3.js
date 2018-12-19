Array.prototype.map2 = function(callback){ // Map gera um novo array
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Cantea", "preco": 7.50}'
]

// Retorne um array apenas com os preços. Para isso, deve-se criar dois Maps

const paraObjeto = json => JSON.parse(json) // Converte um texto para Objeto

const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)