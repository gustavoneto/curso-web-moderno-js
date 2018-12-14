let valor //não inicializada
console.log(valor)  //valor undefined por não ter atribuido nada

valor = null    //não tem nenhum valor dentro dela e não tem nenhum endereço apontando,
                //ou seja, ausencia de valor
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined   //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco  //tirar um atributo de um objeto, usa-se delet
console.log(produto)

produto.preco = null    //sem preço
console.log(!!produto.preco)
console.log(produto)