const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
  // 0 --> busca el primer puerto abierto
})
