// Import modules
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import posts from './router/posts.js'
import users from './router/users'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
// Create an instant of express
const app = express()
// For using later
const PORT = process.env.PORT || 5000

// database URL(URI)
const URI = process.env.DATABASE_URL

// Parse the request
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
// Using cors to avoid Cross-Origin-Resource-Sharing errors
app.use('/', cors())

app.use('/posts', posts)
app.use('/users', users)

// Connect to database, if connect success then start the server
mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("connected to db")
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
