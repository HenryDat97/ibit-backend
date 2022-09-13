// Import modules
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import posts from './router/posts.js'
import mongoose from 'mongoose'

// Create an instant of express
const app = express()
// For using later
const PORT = process.env.PORT || 5000

// database URL(URI)
const URI =
    'mongodb+srv://Henry:giadat2506@cluster0.xxtyn.mongodb.net/?retryWrites=true&w=majority'

// Parse the request
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
// Using cors to avoid Cross-Origin-Resource-Sharing errors
app.use('/', cors())

app.get('/', posts)

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
