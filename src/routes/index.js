import { Router } from 'express'
import { Contact } from '../models/contact.js'

const routes = Router()

routes.get('/info', (request, response, next) => {
  Contact.find()
    .then(result => {
      const notes = result ? result : []
      return response.send(`<p>Phonebook has info for ${notes.length} people</p><p>${Date(Date.now())}</p>`)
    })
    .catch(error => next(error))
})

routes.get('/api/contacts/', (request, response, next) => {
  Contact.find()
    .then(result => {
      return response.json(result)
    })
    .catch(error => next(error))
})

routes.get('/api/contacts/:id', (request, response, next) => {
  const { id } = request.params

  Contact.findById(id)
    .then(result => {
      if(result) return response.json(result)
      else response.status(404).json({ error: 'contact not found' })
    })
    .catch(error => next(error))
})

routes.post('/api/contacts', (request, response, next) => {
  const { name, number } = request.body

  Contact.find()
    .then(result => {
      Contact.create({ name, number }).then(contact => {
        return response.json(contact)
      })
      .catch(error => next(error))
    })
    .catch(error => next(error))
})

routes.put('/api/contacts/:id', (request, response, next) => {
  const { id } = request.params
  const { number } = request.body

  Contact.findByIdAndUpdate(id, { number }, { new: true, runValidators: true })
    .then(result => {
      return response.json(result)
    })
    .catch(error => next(error))
})

routes.delete('/api/contacts/:id', (request, response, next) => {
  const { id } = request.params

  Contact.findByIdAndDelete(id)
    .then(result => {
      return response.json(result)
    })
    .catch(error => next(error))
})

export { routes }