"use strict"
var UserModel = require('../models/user_model.js');
var fs = require('fs');

class Invitation {

	constructor(config){
		_.extend(this, config);
	}

	send(){
		var self = this;

		var data = this.request.body;

		var rules = {
			email: 'required|email',
		};

		var validation = new validator(data, rules);

		if(validation.passes()){

			var template = _.template(fs.readFileSync(base_dir+'/views/emails/invitation.html','utf8'));
			return fn.sendMail({
				from_email : 'shahramfarsyabi@gmail.com',
				to : [{ email : data.email , name :"" }],
				subject : 'Invitation Subject',
				text : template(),
				html : template()
			}, function(err, info){

				var statusCode = 200;
				var msg = '';
				if(err){
					statusCode = 202;
					msg = 'can`t send email';
				}

				var user = self.request.client;
				user.inviteList = _.uniq(user.inviteList.concat(data.email.split(',')));
				user.save();

				self.response.status(statusCode).send({
					message : msg,
					statusCode : statusCode, 
					user : self.request.client
				});

			});
		}

		return this.response.status(422).send(validation.errors);

	}

}

module.exports = Invitation;