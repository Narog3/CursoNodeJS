import express, { json } from 'express'
// import { randomUUID } from 'node:crypto'
// import movies from './movies.json' // <-- ESTO NO ÉS VÁLIDO en MODULE
// 1r forma
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
// 2n forma (recomendable)
// const movies = readJSON('./movies.json') // véase utils.js

import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'
// import { validateMovie, validatePartialMovie } from './schemas/movies.js'
//import { readJSON } from './utils.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express




app.use('/movies', moviesRouter)


const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})