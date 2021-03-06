import colors from 'colors'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/product.routes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})

app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `Server is up on ${process.env.NODE_ENV} port ${PORT}`.magenta.bold
  )
)
