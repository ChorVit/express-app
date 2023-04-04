const express = require('express')
const bodyParsering = require('./bodyParser')
const routes = require('./routes')


const app = express()
const PORT = process.env.PORT || 3000

bodyParsering(app)
routes(app)


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})



