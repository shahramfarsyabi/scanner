"use strict"

var UserModel = require('../models/user_model');
var fs = require('fs');

class InvitationAdminController extends AdminController {

	constructor(config){
		super(config);
	}

	sendInvitation(){	
		var self = this;
		var emails = this.request.body.email;

		_.each(emails, function(email, index){
			var template = _.template(fs.readFileSync(base_dir+'/views/emails/invitation.html','utf8'));
			return fn.sendMail({
				from_email : 'shahramfarsyabi@gmail.com',
				to : [{ email : email , name :"" }],
				subject : 'Invitation Subject',
				text : template(),
				html : template()
			}, function(err, info){

				var statusCode = 200;
				if(err){
					statusCode = 202;
				}

				// var user = self.request.client;
				// user.inviteList = user.inviteList.push(email);
				// user.save();
			});			
		});

		this.response.status(200).send({
			event : 'send_invitation'			
		});
	}
}

module.exports = InvitationAdminController;