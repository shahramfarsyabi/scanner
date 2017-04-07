"use strict"
var User = require('../models/user_model.js');

class Auth {
	
	constructor(config){
		_.extend(this, config);

	}

	signin(){
		var self = this;

		var data = this.request.body;

		var rules = {
			email: 'required|email',
			password: 'required',			
		};

		var validation = new validator(data, rules);

		if(validation.passes()){
			return User.findOne({ 
				email : data.email,
				password : data.password
			}, function(err, user){
				if(user){
					var jwtoken = jwt.sign({ _id: user._id , email : user.email }, process.env.privateKey, { algorithm: process.env.algorithm } );
					return self.response.send( _.extend({}, user.toJSON(), { token : jwtoken }) );
				}

				return self.response.status(403).send({
					message : 'incorrect email or password'
				})
			});
		}

		return this.response.status(422).send(validation.errors);
	}

	signup(){
		var self = this;

		var data = this.request.body;

		var rules = {
			firstName: 'required',
			lastName: 'required',
			email: 'required|email',
			password: 'required',			
		};

		var validation = new validator(data, rules);

		if(validation.passes()){	

			var input = this.request.body;
			_.extend(input, {
				admin : false,
				status : false
			});

			return new User(input).save().then(function(user){
				console.log(user)
				return self.signin();
			}).catch(function(error){
				console.log(error)
				var msg = '';
				switch(error.toJSON().code){
					case 11000:
						msg = 'email already exist'
						break;

					default : 
						msg = error.toJSON().errmsg ;
						break;
				}

				return self.response.status(202).send({
					statusCode : 202,
					message : msg
				});
			});
		}

		return this.response.status(422).send(validation.errors);

	}

}

module.exports = Auth;