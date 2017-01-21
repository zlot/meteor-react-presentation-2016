import figlet from 'figlet'

import express from 'express'
const app = express()

const PORT = 3000

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile('/index.html')
})

app.listen(PORT, () => {
  console.log(`View slides at`)
  figlet(`http://localhost:${PORT}`, 'Contessa', (err, data) => {
    console.log(data)
  })
})
