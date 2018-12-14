let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++){ // coloque LET no for, se não a variável i pode retornar
    console.log(`notas = ${notas[i]}`)  // o tamanho da lista, e não o valor esperado.
}