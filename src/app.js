const express = require('express')
var app = express()
const path = require('path');
const port = process.env.port || 3000;
var session = require('express-session');
const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const apiRouter = require('./routes/apiRouter');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var store = new session.MemoryStore();

app.use(cookieParser());

app.use(cookieSession({
  name: 'session',
  keys: ["secret keys"],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(session({
    secret : "Esto es un secreto, secretísimo",
    resave: false,
    saveUninitialized: false,
    cookie : {
      secure: false,
      maxAge: 60000 * 60, // 1 hour in milliseconds
    },
    store,
  })
);

app.use((req, res, next)=> {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user}
    next();
  }
)

app.use(express.static("public"));
app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.resolve(__dirname, "views"));
app.use(express.json());             // for application/json
app.use(express.urlencoded({ extended: false }));      // permite recibir la información enviada por post desde un formulario en req.body
app.use('/', mainRouter);
app.use('/www.facebook.com', mainRouter);
app.use("/www.instagram.com", mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api/v1', apiRouter)

app.all('*', mainRouter);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})

