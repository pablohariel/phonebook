import express, { request, response } from 'express'
import morgan, { token } from 'morgan'

import { routes } from './routes/index.js'

const app = express()

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

app.listen(3001, () => console.log('Server up at port 3001'))