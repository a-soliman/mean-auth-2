const express		= require('express');
const router 		= express.Router();
const expressValidator = require('express-validator');
router.use(expressValidator())
const multer		= require('multer');
const upload		= multer({dest: './uploads'});

const User 			= require('../../models/user');

router.get('/', ( req, res ) => {
	res.send({"messagee": "working"})
});

router.post('/user/register', upload.single('profileImage'), ( req, res ) => {
	
	let name 		 = req.body.name;
	let email 		 = req.body.email;
	let username	 = req.body.username;
	let password 	 = req.body.password;
	let password2 	 = req.body.password2;
	let profileImage = req.file ? req.file.filename : 'noImage.jpg';

	// Form Validation
	req.checkBody('name', 'Name field is required').notEmpty();
	req.checkBody('email', 'email field is required').notEmpty();
	req.checkBody('email', 'email is not valid').isEmail();
	req.checkBody('username', 'username field is required').notEmpty();
	req.checkBody('password', 'password field is required').notEmpty();
	req.checkBody('password2', 'passwords do not match.').equals(req.body.password);

	// Check Validation errors
	let errors = req.validationErrors();

	if ( errors ) {
		res.send({errors});
	}
	else {
		const newUser = new User({
			name, email, username, password, profileImage
		});

		User.createUser(newUser, ( err, user ) => {
			if ( err ) throw err;
			console.log(user);
			res.status(200).send({status: 'success', message: 'You are now registered and can login.'});
		})

	}
});

// Login 
router.post('/user/login', ( req, res ) => {
	let username 	= req.body.username;
	let password 	= req.body.password;

	// Form Validation
	req.checkBody('username', 'Username field is required.').notEmpty();
	req.checkBody('password', 'Password Field is required.').notEmpty();

	// Check validation errors
	let errors = req.validationErrors();

	if ( errors ) {
		res.send({errors});
	} else {
		console.log('Should look in the DB...')
	}
})

module.exports = router;