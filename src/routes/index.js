import { Router } from 'express'

const routes = Router()

let notes = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

routes.get('/info', (request, response) => {
  return response.send(`<p>Phonebook has info for ${notes.length} people</p><p>${Date(Date.now())}</p>`)
})

routes.get('/api/notes/', (request, response) => {
  return response.json(notes)
})

routes.get('/api/notes/:id', (request, response) => {
  const { id } = request.params
  const note = notes.find(note => note.id === Number(id))

  if(!note) return response.status(404).json({ error: 'note not found' })

  return response.json(note)
})

routes.post('/api/notes', (request, response) => {
  const { name, number } = request.body

  if(!name || !number) {
    return response.status(400).json({ error: 'invalid field' })
  }

  const nameAlreadyUsed = notes.find(note => note.name === name)

  if(nameAlreadyUsed) return response.status(400).json({ error: 'name must be unique' })

  const note = {
    id: notes[notes.length - 1].id + 1,
    name,
    number
  }

  notes.push(note)

  return response.json(note)
})

routes.put('/api/notes/:id', (request, response) => {
  const { id } = request.params
  const { number } = request.body

  const noteIndex = notes.findIndex(note => note.id === Number(id))

  if(noteIndex < 0) return response.status(404).json({ error: 'note not found' })

  notes[noteIndex].number = number

  return response.json(notes[noteIndex])
})

routes.delete('/api/notes/:id', (request, response) => {
  const { id } = request.params

  const note = notes.find(note => note.id === Number(id))

  if(!note) return response.status(404).json({ error: 'note not found' })

  notes = notes.filter(note => note.id !== Number(id))

  return response.json(note)
})

export { routes }