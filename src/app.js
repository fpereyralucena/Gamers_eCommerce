const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

const mainRouter = require('./routes/mainRouter.js');
const productsRouter = require('./routes/productsRouter.js');
const ussersRouter = require('./routes/ussersRouter.js');

app.use(express.static("public"));
app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.resolve(__dirname, "views"));


app.use('/', mainRouter);
app.use('/www.facebook.com', mainRouter);
app.use("/www.instagram.com", mainRouter);

app.use('/login', ussersRouter);
app.use('/recover-pass', ussersRouter);
app.use('/recuperar-contrasena', ussersRouter);
app.use('/register', ussersRouter);

app.use('/detail', productsRouter);
app.use('/shopping-cart', productsRouter);
app.use("/create-product", productsRouter);
app.use("/edit-product", productsRouter);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

