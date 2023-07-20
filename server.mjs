import express from 'express'
import path from 'path';
const __dirname = path.resolve();

import server from './server/main.mjs'

import router from './router/server.mjs'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json()); // body parser

app.use("/server", server)
app.use("/games", express.static(path.join(__dirname, 'games')))
app.use("/router", router)

app.use("/", express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})