// argumentos de entrada
// console.log(process.argv)

// controlar el proceso y su salida
// process.exit(1) // 0 --> todo bien, 1 --> Algun error y queremos que salga

// podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar los recursos
})

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)
