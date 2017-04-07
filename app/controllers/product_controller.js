"use strict"
var ProductModel = require('../models/product_model.js');

class Product {

	constructor(config){
		_.extend(this, config);
	}

	index(){
		var self = this;
		return ProductModel.find({}, function(err, products){
			return self.response.send(products);
		});
	}

	show(object, barcode){
		var self = this;

		return ProductModel.findOne(object, function(err, product){
			if(err) return self.response.send({
				msg : "product not found"
			});

			if(product){
				var user = self.request.client;
				user.checkedProductsByBarcode.push(product);
				user.save();		
				return self.response.send(product);
			}

			return self.response.status(202).send({
				message : "item not found",
				statusCode : 202
			});

		});
	}	

}

module.exports = Product;