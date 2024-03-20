const express = require('express')
const app = express()
const path = require('path');
const port = 3000;
const session = require('express-session');
const db = require('./database/models');


const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const userMiddleware = require("./middlewares/userMiddleware");

app.use(session({
  secret : "Esto es un secreto, secretísimo",
  resave: false,
  saveUninitialized: false
}));



app.use(express.static("public"));
app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.resolve(__dirname, "views"));
app.use(express.json());             // for application/json
app.use(express.urlencoded({ extended: false }));      // permite recibir la información enviada por post desde un formulario en req.body
app.use(userMiddleware)

app.use('/', mainRouter);
app.use('/www.facebook.com', mainRouter);
app.use("/www.instagram.com", mainRouter);


app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

