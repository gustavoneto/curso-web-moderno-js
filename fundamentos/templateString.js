const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`   //JS suporta quebra de linhas em uma String com o uso do acento crase
    console.log(concatenacao, template)

    //expressoes
    console.log(`1 + 1 = ${1 + 1}`)

    const up = texto => texto.toUpperCase()
    console.log(`Ei... ${up('cuidado')}!`)