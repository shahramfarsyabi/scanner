"use strict"
var User = require('../models/user_model.js');

class Client {

	constructor(config){
		_.extend(this, config);
	}

	index(){
		return this.response.send(this.request.client);
	}

}

module.exports = Client;