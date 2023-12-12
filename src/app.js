const express = require('express')
const app = express()
const path = require('path');
const port = 3000;
const mainRouter = require('./routes/mainRouter.js');
app.use(express.static("public"));
app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.resolve(__dirname, "views"));


app.use('/', mainRouter);
app.use('/login', mainRouter);
app.use('/recover-pass', mainRouter);
app.use('/recuperar-contrasena', mainRouter);
app.use('/register', mainRouter);
app.use('/detail', mainRouter);
app.use('/shopping-cart', mainRouter);
app.use('/www.facebook.com', mainRouter);
app.use("/www.instagram.com", mainRouter);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

