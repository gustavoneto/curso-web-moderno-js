const valores = [7.7, 8.9, 6.3, 9.2] // array de 4 elementos. Sempre começa com posição 0.
console.log(valores[0], valores[3]) // pega os valores da posição 0 e 3.
console.log(valores[4]) // pega o valor na posição 4, que não existe, retornando 'undefined'
console.log()

valores[4] = 10 // a partir daqui, o array 'valores' tem a posição 4 com o valor 10.
console.log(valores) // retorna o array 'valores' atualizado com a nova posição.
 
valores.push({id: 3}, false, null, 'teste') // adiciona em 'valores' esses 3 valores nesta posição.
console.log(valores) // array em JS suporta varios tipos de valores
console.log()

console.log(valores.pop())  // seleciona o último valor do array e o retira. 
                            // Neste caso, foi printado qual o valor que está sendo retirado pela função .pop
delete valores[0] // deleta o valor do array definido, deixando a posição vazia.
console.log(valores)

console.log(typeof valores) // Mostra o tipo de 'valores', que é object.