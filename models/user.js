const mongoose 		= require('mongoose');
const bcrypt			= require('bcryptjs');

const dbUrl = 'mongodb://ahmed_soliman:123456@ds249707.mlab.com:49707/mean_ng5_auth'
mongoose.connect( dbUrl , (err) => {
	if(err) {
		return console.log('CAN NOT CONNECT')
	}
});
const db = mongoose.connection;

//User Schema

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		index: true
	},
	name: {
		type: String
	},
	password: {
		type: String
	},
	profileImage: {
		type: String
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

// module.exports.getUserById = ( id, callback ) => {
// 	user.findById(id, callback);
// }

// module.exports.getUserByUsername = ( username, callback ) => {
// 	let query = { username };
// 	User.findOne(query, callback);
// }

// module.exports.comparePassword = ( candidatePassword, hash, callback ) => {
// 	bcrypt.compare(candidatePassword, hash, ( err, isMatch ) => {
// 		callback(null, isMatch);
// 	})
// }
module.exports.createUser = ( newUser, callback ) => {

	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}