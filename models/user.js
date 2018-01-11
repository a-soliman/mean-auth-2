const mongoose 		= require('mongoose');

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

module.exports.createUser = ( newUser, callback ) => {
	newUser.save(callback);
}