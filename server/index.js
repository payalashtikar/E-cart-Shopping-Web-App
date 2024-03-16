const express = require('express')
const app = express()
const dotEnv = require('dotenv')
const cors = require('cors')
dotEnv.config()
const port = process.env.PORT
require('./db/dbConnection')


app.use(express.json())
app.use(cors())
app.use(require('./routes/userRoute'))

// app.get('/', async (req, res) => {
//     res.end('hii')
// })

app.listen(port, (err) => {
    if (err) throw err
    console.log(`server running on port  ${port}`)
})