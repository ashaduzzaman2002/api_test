const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000 || process.env.port

app.use(cors())
app.get('/' , (req, res) => res.send('Go to - /api/test'))
app.get('/api/test', (req, res) => res.json({msg: 'Hello World!'}))

app.listen(port)