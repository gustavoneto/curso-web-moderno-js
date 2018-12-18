const sequencia = {
    _valor: 1, // convenção, pretende ser acessível apenas internamente dentro do objeto sequência
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // ignorou essa atribuição por ser menor que o último valor "1000"
console.log(sequencia.valor, sequencia.valor)