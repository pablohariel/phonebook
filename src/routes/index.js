import { Router } from 'express'
import { Contact } from '../models/contact.js'

const routes = Router()

routes.get('/info', (request, response) => {
  Contact.find()
    .then(result => {
      const notes = result ? result : []
      return response.send(`<p>Phonebook has info for ${notes.length} people</p><p>${Date(Date.now())}</p>`)
    })
    .catch(err => {
      console.log('error: ', err.message)
      return response.status(500).json({ message: 'internal server error' })
    })
})

routes.get('/api/contacts/', (request, response) => {
  Contact.find()
    .then(result => {
      return response.json(result)
    })
    .catch(err => {
      console.log('error: ', err.message)
      return response.status(500).json({ message: 'internal server error' })
    })
})

routes.get('/api/contacts/:id', (request, response) => {
  const { id } = request.params

  Contact.findById(id)
    .then(result => {
      if(result) return response.json(result)
      else response.status(404).json({ message: 'contact not found' })
    })
    .catch(err => {
      console.log('error: ', err.message)
      return response.status(404).json({ message: 'contact not found' })
    })
})

routes.post('/api/contacts', (request, response) => {
  const { name, number } = request.body

  if(!name || !number) {
    return response.status(400).json({ error: 'invalid field' })
  }

  Contact.find()
    .then(result => {
      const nameAlreadyUsed = result.find(contact => contact.name === name)
      if(nameAlreadyUsed) return response.status(400).json({ error: 'name must be unique' })

      Contact.create({ name, number }).then(contact => {
        return response.json(contact)
      })
    })
    .catch(err => {
      console.log('error: ', err.message)
      return response.status(500).json({ message: 'internal server error' })
    })
})

routes.put('/api/contacts/:id', (request, response) => {
  const { id } = request.params
  const { number } = request.body

  Contact.findByIdAndUpdate(id, { number }, { new: true })
    .then(result => {
      if(result) return response.json(result)
      else response.status(404).json({ message: 'contact not found' })
    })
    .catch(err => {
      console.log('error: ', err.message)
      return response.status(404).json({ message: 'contact not found' })
    })
})

routes.delete('/api/contacts/:id', (request, response) => {
  const { id } = request.params

  Contact.findByIdAndDelete(id)
    .then(result => {
      return response.json(result)
    })
    .catch(err => {
      console.log('error: ', err.message)
      return response.status(404).json({ message: 'contact not found' })
    })
})

export { routes }