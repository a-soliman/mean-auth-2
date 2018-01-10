const express		= require('express');
const bodyParser 	= require('body-parser');
const path 			= require('path');


const app = express();
const port = process.env.PORT || 3000;

// API for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

