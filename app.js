const express			= require('express');
const bodyParser 		= require('body-parser');
const path 				= require('path');
const logger 			= require('morgan');
const cookieParser 		= require('cookie-parser');
const session			= require('express-session');
const passport 			= require('passport');
const expressValidator	= require('express-validator');
const localStrategy 	= require('passport-local').Strategy;
const multer			= require('multer');
const upload			= multer({dist: './uploads'});
const flash 			= require('connect-flash');
const bcrypt			= require('bcryptjs');
const mongo 			= require('mongodb');
const mongoose 			= require('mongoose');

// Initializing the db using mongoose
const db = mongoose.connection;

// API for interacting with MongoDB
const api = require('./server/routes/api');

const app = express();
//let port = process.env.PORT || 3000;
app.set('port', (process.env.PORT || 3000));

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

// Handle sessions
app.use(session({
	secret: 'secret',
	saveIninitialized: true,
	resave: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Validator
app.use(expressValidator({
	errorFormatter: ( param, msg, value ) => {
		let namespace 	= param.split('.')
		, root			= namespace.shift()
		, formParam		= root;

		while ( namespace.length ) {
			formParam += `[${namespace.shift()}]`;
		}

		return {
			param  	: formParam,
			msg		: msg,
			value	: value
		};
	}
}));

// express Messages
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


app.listen(app.get('port'), () => {
	console.log(`Server is running on app.get('port}')`);
});
