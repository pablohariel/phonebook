import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { routes } from './routes/index.js'

const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json()) 

morgan.token('body', (request, response) => {
  return request.method === 'POST' ? JSON.stringify(request.body) : ''
})

app.use(morgan((tokens, request, response) => {
  return [
    tokens.method(request, response),
    tokens.url(request, response),
    tokens.status(request, response),
    tokens.res(request, response, 'content-length'), '-',
    tokens['response-time'](request, response), 'ms',
    tokens.body(request, response)
  ].join(' ')
}))

app.use(routes)

app.use((request, response) => {
  return response.status(404).json({ error: 'unknown endpoint' })
})

app.use((error, request, response, next) => {
  console.log(error.message)
  if(error.name === 'CastError') {
    return response.status(400).json({ error: 'invalid id' })
  }
  next(error)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server up at port ${PORT}`)
})

