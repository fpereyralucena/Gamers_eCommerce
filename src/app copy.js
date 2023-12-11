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

app.get('/recover-pass', (req, res) => {
  res.sendFile (views + "recover-pass.html")
  
})

app.post('/recuperar-contrasena', (req, res) => {
  res.send("Su nueva contraseña ha sido enviada a su casilla de correo, por favor controle su carpeta de correo no deseado")
})


app.get('/register', (req, res) => {
    res.sendFile (views + "register.html")
    
})
  
app.get('/detail', (req, res) => {
  res.sendFile (views + "detail.html")
  
})

app.get('/shopping-cart', (req, res) => {
  res.sendFile (views + "shopping-cart.html")
  
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

