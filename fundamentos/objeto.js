const prod1 = []    //cria um tipo array
prod1.nome = 'Celular Ultra Mega'   //nome e preco foram criados dinamicamente
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40      //evitar atributos com espaço

console.log(prod1)
console.log()

const prod2 = {     //cria um tipo objeto ***É DIFERENTE DE JSON***
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

/*
* JSON = JavaScript Object Notation
* Json é texto, objeto é atributo
*/