const path = require('path');

const express = require('express');
const csrf = require('csurf');
const expressSession = require('express-session');

const createSessionConfig = require('./config/session')
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddlewar = require('./middlewares/error-handler');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());

app.use(addCsrfTokenMiddleware);

app.use(authRoutes);

app.use(errorHandlerMiddlewar);

db.connectToDatabase().then(function(){
    app.listen(3000);
}).catch(function(error){
    console.log('Failed to connect to the data base!');
    console.log(error);
});