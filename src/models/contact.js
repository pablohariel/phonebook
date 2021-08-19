import mongoose from 'mongoose'
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
  name: String,
  number: String
})  

const Contact = mongoose.model('Contact', contactSchema)

export { Contact }



