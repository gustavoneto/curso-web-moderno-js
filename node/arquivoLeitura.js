const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

/**
 * Como ler um arquivo de forma síncrona.
 * 
 * Cuidado pois se for um arquivo pesado, ele vai acabar travando em event looping
 * Ele vai ficar parado de forma síncrona esperando ler o arquivo completamente por não
 * estar delegando o i/o assíncrono e está colocando dentro do event looping esse tempo
 * e ele irá ficar parado esperando ler o arquivo completamente até atender a próx requisição.
 * Se for um arquivo pequeno, não tráz impacto.
 */

 const conteudo = fs.readFileSync(caminho, 'utf-8') // importante usar o encode (utf) correto!
 console.log(conteudo)

 // Leitura assincrono

 fs.readFile(caminho, 'utf-8', (err, conteudo) => {
     const config = JSON.parse(conteudo)
     console.log(`${config.db.host}:${config.db.port}`)
 })

 const config = require('./arquivo.json')
 console.log(config.db)
 console.log()

 fs.readdir(__dirname, (err, arquivos) => {
     console.log('Conteúdo da pasta...')
     console.log(arquivos)
 })