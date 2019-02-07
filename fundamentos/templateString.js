/**
 * Template String é semelhante à uma concatenação de string comum, porém
 * essa opção tem algumas opções que não tem no modo comum, como por exêmplo
 * a quebra de linha no meio de uma frase. O template string considera as
 * quebras de linha dentro dele.
 */

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!\n' // concatenação comum

//concatenação template string
const template = `
    Olá
    ${nome}!\n`   //JS suporta quebra de linhas em uma String com o uso do acento crase
    console.log(concatenacao, template)

    //expressoes
    console.log(`1 + 1 = ${1 + 1}\n`) // ele interpola uma função

    const up = texto => texto.toUpperCase()
    console.log(`Ei... ${up('cuidado')}!`)