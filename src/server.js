import express from 'express'

import { routes } from './routes/index.js'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3001, () => console.log('Server up at port 3001'))