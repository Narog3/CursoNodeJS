// Esto sólo en los módulos nativos que no tienen promesas nativas

// const {promisify} = require('node:util')
// const reeadFilePromise = promisify(fs.readFyle)

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8').then(text => { console.log(text) })

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8').then(text => { console.log(text) })
