"use strict"

class AdminBaseController {
	constructor(config){
		_.extend(this, config);
	}
}

module.exports = AdminBaseController;