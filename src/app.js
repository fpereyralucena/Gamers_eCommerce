const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const views = path.join(__dirname, './views/')

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.sendFile (views + "index.html")
  
})
app.get('/login', (req, res) => {
    res.sendFile (views + "login.html")
    
})

app.get('/register', (req, res) => {
    res.sendFile (views + "register.html")
    
})
  
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

