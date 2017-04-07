var router = express.Router();
var ProductController = require('../controllers/product_controller.js');
/* GET products listing. */
router.get('/', function(req, res, next) {

	products = new ProductController({
		request : req,
		response : res,
		next : next
	});

	return products.index();
});

/* GET product by id. */
router.get('/:id', function(req, res, next) {

	products = new ProductController({
		request : req,
		response : res,
		next : next
	});

	return products.show({
		_id : req.params.id
	}, false);
});

/* GET product find by barcode. */
router.get('/:barcode/barcode', 
	function(req, res, next){

		if(!req.auth){
			return res.status(401).send({
				statusCode : 401,			
				message : 'authorization faild'
			})
		}

		if(!req.client.status){
			return res.status(401).send({
				statusCode : 401,
				message : 'access forbidden'
			})
		}

		next();

	},
	function(req, res, next) {
		products = new ProductController({
			request : req,
			response : res,
			next : next
		});

		return products.show({
			barcode : req.params.barcode
		}, true);
	}
);

module.exports = router;
