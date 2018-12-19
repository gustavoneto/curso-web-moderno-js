const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Cantea", "preco": 7.50}'
]

// Retorne um array apenas com os preços. Para isso, deve-se criar dois Maps

// 1° - Chamar o JSON.parse para transformar as Strings em Objetos

const paraObjeto = json => JSON.parse(json) // Converte um texto para Objeto
console.log(paraObjeto)

// 2° - Receber um Objeto com entrada e retornar apenas o preço

const apenasPreco = produto => produto.preco
console.log(apenasPreco)

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)