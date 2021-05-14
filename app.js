
const createError = require('http-errors');
require("dotenv").config()
const express = require('express');
const path = require('path');
const passport = require('passport')
const lessMiddleware = require('less-middleware');
const bodyParser = require('body-parser')
const cors = require('cors')
const hbs = require('express-handlebars');
const cookieSession = require('cookie-session');
require('dotenv').config();
const morgan = require('morgan')



//PRUEBA 

/********************************/
//Routes
/*******************************/
//-Loggin with the table's data 
//-If all the information is ok, Will show the menu
const index = require('./routes/index')

//-Menu
const menu = require('./routes/menu')
const notification = require('./routes/notification')
const correo = require('./routes/correo')
const ordenar = require('./routes/ordenar')
const clima = require('./routes/clima')

//Init app
const app = express();

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['clave'] //clave para encriptar 
}))


// view engine setup
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout' }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.use(cors())
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['clave']
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());



app.use(express.json());
app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/public')));


const http = require('http').Server(app);

const io = require('socket.io')(http, {
  cors: {
    origins: ['']
  }
});


app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['clave']
}))

app.use(passport.initialize())
app.use(passport.session())


//Use routes
app.use('/',index);
app.use('/menu',menu);
app.use('/notification',notification);
app.use('/correo',correo);
app.use('/ordenar',ordenar);
app.use('/clima',clima)

app.use('/api/employees',require('./routes/employees.routes'));
app.use('/api/platillos',require('./routes/platillos.routes'));
app.use('/api/mesas',require('./routes/mesas.routes'));
app.use('/api/files',require('./routes/s3.router'))

io.on('connection', socket => {

  socket.on('NuevaNotificacion', notif => {
    io.emit('Notificaciones', notif);
  })
  socket.on('NuevaOrden', info => {
    console.log(info)
    io.emit('CambiarCodigo', info);
  })
});

app.get('*', function (req, res) {
  res.sendfile('./public/index.html'); // load our index.html file
});
app.post('*', function (req, res) {
  res.sendfile('./public/index.html'); // load our index.html file
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.send("false");
});

app.use((req, res, next) => {
  if (req.header('Authorization')) {
    req.token = req.header('Authorization').replace('Bearer ', '');
    return next();
  }
  res.status(401).send('401 unauthorized');
});


app.use(function (req, res, next) {
  next(createError(404));
});

app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'angular build file path'));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.redirect("/");
});
// http.listen(3000, () => console.log('listening on port 3000'));

http.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});





