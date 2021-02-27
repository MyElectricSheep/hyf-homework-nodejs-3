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

app.delete('/user/:id', (req, res) => {
    const targetUser = users.find(u => u.id === Number(req.params.id))
    if (!targetUser) {
        return res.sendStatus(204)
    } else {
        const index = users.indexOf(targetUser)
        users.splice(index, 1);
        res.status(202).json(targetUser)
    }
})

app.listen(3000, () => {
    console.log('listening to port 3000...')
})