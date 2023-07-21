import express from 'express'
import path from 'path';
const __dirname = path.resolve();

const app = express()
app.use(express.json());

// app.use(express.static(path.join(__dirname, './apiv1/routes/sign_up')))
app.use("/api/v1/login", express.static(path.join(__dirname, './apiv1/routes/sign_in')))
app.use("/api/v1/signup", express.static(path.join(__dirname, './apiv1/routes/sign_up')))
app.use("/api/v1/home", express.static(path.join(__dirname, './apiv1/routes/app')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})