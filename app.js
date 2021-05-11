<<<<<<< HEAD
        
=======
const createError = require('http-errors');
require("dotenv").config()             
>>>>>>> 387933e8ec63499bc1d02e0f80a26e88eb311b4a
const express = require('express');    
const path = require('path');
const lessMiddleware = require('less-middleware');
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser')
const cors=require('cors')
const hbs = require('express-handlebars');
<<<<<<< HEAD
const lessMiddleware = require('less-middleware');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('dotenv').config();
require('./functions/passport');
=======
const morgan = require('morgan')

>>>>>>> 387933e8ec63499bc1d02e0f80a26e88eb311b4a
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
const correo=require('./routes/correo')
const ordenar=require('./routes/ordenar')
<<<<<<< HEAD
const auth=require('./routes/auth')


=======
 
const cookieSession = require('cookie-session')
>>>>>>> 387933e8ec63499bc1d02e0f80a26e88eb311b4a
//Init app
const app = express();
 
app.use(cookieSession({   maxAge: 24 * 60	 * 60 * 1000,   
  keys: ['clave'] //clave para encriptar 
})) 


// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout'}));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

<<<<<<< HEAD
app.use(cors())
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['clave'] 
 }))
 
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

=======

 
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())
app.use(cookieParser());
>>>>>>> 387933e8ec63499bc1d02e0f80a26e88eb311b4a
app.use(express.urlencoded({ extended: false }));
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/public')));
 

const http = require('http').Server(app);

const io = require('socket.io')(http, {
  cors: {
      origins: ['http://localhost:4200']
  }
});

//Use routes
app.use('/',index);
app.use('/menu',menu);
app.use('/notification',notification);
app.use('/correo',correo);
app.use('/ordenar',ordenar);
app.use('/auth',auth)

 
app.use('/api/employees',require('./routes/employees.routes'));
app.use('/api/platillos',require('./routes/platillos.routes'));
app.use('/api/mesas',require('./routes/mesas.routes'));
app.use('/api/auth',require('./routes/auth.crud.routes'));

io.on('connection', socket => {
  console.log("Socket conectado")
  socket.on('NuevaNotificacion',notif=>{
    io.emit('Notificaciones',notif);
  })
});
// catch 404 and forward to error handler
 app.use(function(req, res, next) {
   next(createError(404));
 });

 // error handler
 app.use(function(err, req, res, next) {
   
 // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   res.send("false");
 });

 http.listen(3000, () => console.log('listening on port 3000'));