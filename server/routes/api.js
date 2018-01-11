const express		= require('express');
const router 		= express.Router();
const expressValidator = require('express-validator');
router.use(expressValidator())
const multer		= require('multer');
const upload		= multer({dest: './uploads'});

router.get('/', ( req, res ) => {
	res.send({"messagee": "working"})
});

router.post('/user/register', upload.single('profileImage'), ( req, res ) => {
	
	let name 		 = req.body.name;
	let email 		 = req.body.email;
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
		res.status(400).send({errors});
	}
	else {
		console.log('No Errors')
	}
});

module.exports = router;