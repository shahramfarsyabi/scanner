"use strict"

var UserModel = require('../models/user_model');

class ClientAdminController extends AdminController {

	constructor(config){
		super(config);
	}

	index(){
		var self = this;
		var isAjaxRequest = this.request.xhr;

		console.log(isAjaxRequest);

		if(isAjaxRequest){
			// return products collection
		}

		return UserModel.find({}, function(err, products){
			if(err) return self.response.send(err);
			return self.response.send(products);
		});		

	}

	changeStatus(id){
		var data = this.request.body;
		var self = this;
		UserModel.update({ _id: id }, { $set : { status : data.status } }, function(client){
			console.log(data)
			return self.response.send({
				event : 'update',
				item : client
			});
		});		
	}

	show(object){
		
		var self = this;
		UserModel.findOne(object, function(err, client){
			return self.response.send(client);
		})
	}
}

module.exports = ClientAdminController;