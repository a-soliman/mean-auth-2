const express		= require('express');
const bodyParser 	= require('body-parser');
const path 			= require('path');
const logger 		= require('morgan');
const cookieParser 	= require('cookie-parser');
const session		= require('express-session');
const passport 		= require('passport');
const localStrategy = require('passport-local').Strategy;
const multer		= require('multer');
const flash 		= require('connect-flash');
const mongo 		= require('mongodb');
const mongoose 		= require('mongoose');

// Initializing the db using mongoose
const db = mongoose.connection;

// API for interacting with MongoDB
const api = require('./server/routes/api');

const app = express();
const port = process.env.PORT || 3000;

// Logger
app.use(logger('dev'));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Angular dist output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all other requests to Angular app
app.get('*', ( req, res ) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});

