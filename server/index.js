import express from 'express';
import bodyParser from 'body-parser';
import './database/db.setup.js'
import personRoutes from './routes/person.route.js'

// Initialize the app
const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json())

app.use("/api", personRoutes)

// app.get("/", (req, res) => {
//     res.status(200).send({ message: "Hello World" })
// })

// Start Server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})