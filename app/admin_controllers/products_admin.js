"use strict"

var ProductModel = require('../models/product_model');

class ProductAdminController extends AdminController {

	constructor(config){
		super(config);
	}

	index(){
		var self = this;
		var isAjaxRequest = this.request.xhr;

		return ProductModel.find({}, function(err, products){
			if(err) return self.response.send(err);
			return self.response.send(products);
		});

		// if(isAjaxRequest){}
		// return products view html
		// return this.response.render('dashboard');
	}

	show(object){
		var self = this;
		ProductModel.findOne(object, function(err, product){
			return self.response.send(product);
		})
	}

	/**
	 * new product
	 * generate barcode for product
	 * @return product jsonObject
	 */
	store(){

		var self = this;
		_.extend(this.request.body, {
			status : parseInt(this.request.body.status) ? true : false,
		})

		new ProductModel(this.request.body).save().then(function(product){
			console.log(product.barcode);
			self.barcodeGenerator(product.barcode);
			return self.response.send({
				event : 'create',
				item : product
			});
		});
	}

	update(id){

		var self = this;
		var data = this.request.body;

		_.extend(this.request.body, {
			status : parseInt(data.status) ? true : false,
		})

		ProductModel.update({ _id: id }, { $set : data }, function(product){
			console.log(data)
			self.barcodeGenerator(data.barcode);
			return self.response.send({
				event : 'update',
				item : data
			});
		});
	}	

	destroy(id){
		var self = this;
		ProductModel.remove({ _id: id }, function(err){
		    if(err) throw err;
			return self.response.send({
				event : 'delete'
			});
		});
	}


	barcodeGenerator(bardcode){
		bwipjs.toBuffer({
		    bcid:        'code128',       // Barcode type
		    text:        bardcode,    // Text to encode
		    scale:       3,               // 3x scaling factor
		    height:      10,              // Bar height, in millimeters
		    includetext: true,            // Show human-readable text
		    textxalign:  'center',        // Always good to set this
		    textfont:    'Inconsolata',   // Use your custom font
		    textsize:    13               // Font size, in points
		}, function (err, png) {
		    if (err) {
		        // Decide how to handle the error
		        // `err` may be a string or Error object
		    } else {
		        // `png` is a Buffer
		        // png.length           : PNG file length
		        // png.readUInt32BE(16) : PNG image width
		        // png.readUInt32BE(20) : PNG image height
				require('fs').writeFile(base_dir+'/public/barcodes/'+bardcode+'.png', png, 'binary', function(err){
				       if (err) throw err
				       console.log('File saved.')
				})			        
		        // return self.response.send(png)
		    }
		});			
	}
}

module.exports = ProductAdminController;