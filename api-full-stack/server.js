import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoutes from './routes/auth.js'

dotenv.config({ path: './database.env' })

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 5000

if (!process.env.MONGO_URI) {
  console.error('ERROR: MONGO_URI not found in environment. Check database.env file.')
  process.exit(1)
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`API listening on ${PORT}`))
  })
  .catch(err => {
    console.error('Mongo connection error', err)
    process.exit(1)
  })