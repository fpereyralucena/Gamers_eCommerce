const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');

app.use(express.static("public"));
app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.resolve(__dirname, "views"));


app.use('/', mainRouter);
app.use('/www.facebook.com', mainRouter);
app.use("/www.instagram.com", mainRouter);


app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

