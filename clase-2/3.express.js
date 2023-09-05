const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

/*
app.use((req, res, next) => {
  console.log('Mi primer middleware')
  // trackear la request a la BD
  // revisar si el usuario tiene cookies, etc
  next()
}) */

app.use(express.json()) // Esto hace lo mismo que lo que está comentado abajo

/*
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // solo llegan request que son POST y que tienen el header Content-Type: application/json
  let body = ''
  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la información en el req.body
    req.body = data;
    next()
  })
}) */



app.get('/pokemon/ditto', (req, res) => {
  //res.status(200).send('<h1>Mi página</h1>') status(200) lo podemos quitar
  // Para devolveer un json --> res.json()
  res.json(ditto)

})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// La última a la que va a llegar (si no ha podido hacer el get y el post)
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})