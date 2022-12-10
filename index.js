const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

const Origins = ['https://www.google.com', 'https://in.search.yahoo.com']

app.get('/allOrigins',cors(), (req,res) => {
    res.send({
        msg : "this is your precious data"
    })
})

app.get('/specificOrigin',cors({origin : Origins}),  (req,res) => {
    res.send({
        msg : "this is your precious data"
    })
})

app.listen(PORT, () => {
    console.log(`Server started : http://locahost:${PORT}`)
})