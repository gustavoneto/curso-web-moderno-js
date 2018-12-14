// Factory tem o objeto de fabricar a instância de um objeto

// Factory simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())