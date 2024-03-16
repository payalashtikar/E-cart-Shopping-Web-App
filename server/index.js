const express = require('express')
const app = express()
const dotEnv = require('dotenv')
dotEnv.config()
const port = process.env.PORT

app.get('/', async (req, res) => {
    res.end('hii')
})

app.listen(port, (err) => {
    if (err) throw err
    console.log(`server running on port  ${port}`)
})