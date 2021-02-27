const express = require('express')

const app = express()

const users = []

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    users.push({ id: 0 })
    res.status(200).json({ id: 0 })
})

app.get('/user/:id', (req, res) => {
    res.status(200).json({ id: Number(req.params.id) })
})

app.listen(3000, () => {
    console.log('listening to port 3000...')
})