"use strict"

var UserModel = require('../models/user_model');

class AuthAdminController extends AdminController {

	constructor(config){
		super(config);
	}

	signin(){
		return this.response.render('signin');
	}

	authorize(id){
		var data = this.request.body;
		var self = this;

		UserModel.findOne({ email : data.email, password : data.password }, function(error, user){
			// user.admin = true;
			// user.save();
			// console.log(user)
			if(!user) return self.response.redirect('/admin/signin?error=incorrect');
			if(!user.admin) {
				return self.response.redirect('/admin/signin');
			}


			self.request.session.user = user;
			self.request.session.auth = true;
			// console.log(self.request.session)
			self.request.session.save(function(err) {
			  // session saved
			});

			return self.response.redirect('/admin/dashboard');
		});		
	}
}

module.exports = AuthAdminController;