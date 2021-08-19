import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch((err) => {
    console.log('error connecting to mongodb', err.message)
  })

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    unique: true
  },
  number: {
    type: String,
    required: true,
    minLength: 8
  },
})  

contactSchema.plugin(uniqueValidator)

const Contact = mongoose.model('Contact', contactSchema)

export { Contact }



