const mongoose = require('mongoose')
const DB = process.env.DB

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DB, connectionParams)
    .then(() => console.log('connection - SUCCESS'))
    .catch(() => console.log('connection - FAILED'))