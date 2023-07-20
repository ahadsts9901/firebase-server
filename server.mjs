import express from 'express'
import path from 'path';
const __dirname = path.resolve();

import server from './server/main.mjs'
import cricket from './cricket/server.mjs'

// import apiv1Router from './apiv1/main.mjs'
// import apiv2Router from './apiv2/main.mjs'

const app = express()

app.use(express.json()); // body parser

// app.use("/api/v1", apiv1Router)
// app.use("/api/v2", apiv2Router)

app.use("/server", server)
app.use("/games", express.static(path.join(__dirname, 'games')))
app.use("/cricket", express.static(path.join(__dirname, 'cricket')));
app.use("/cricket", cricketBackend);

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})