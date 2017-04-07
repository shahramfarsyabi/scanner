var router = express.Router();
var AdminProductController = require('../admin_controllers/products_admin.js');

router.use(backofficeSecureMiddleware);
/* GET products listing. */
router.get('/', function(req, res, next) {

	products = new AdminProductController({
		request : req,
		response : res,
		next : next
	});

	return products.index();
});

router.post('/', function(req, res, next) {

	products = new AdminProductController({
		request : req,
		response : res,
		next : next
	});

	return products.store();
});

router.get('/:id', function(req, res, next) {
	
	products = new AdminProductController({
		request : req,
		response : res,
		next : next
	});

	return products.show({
		_id : req.params.id
	});	
});

router.put('/:id', function(req, res, next) {
	
	products = new AdminProductController({
		request : req,
		response : res,
		next : next
	});

	return products.update(req.params.id);	
});

router.delete('/:id', function(req, res, next) {
	
	products = new AdminProductController({
		request : req,
		response : res,
		next : next
	});

	return products.destroy(req.params.id);	
});

module.exports = router;
