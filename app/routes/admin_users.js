var router = express.Router();

var AdminClientController = require('../admin_controllers/users_admin.js');

router.use(backofficeSecureMiddleware);
/* GET products listing. */
router.get('/', function(req, res, next) {

	clients = new AdminClientController({
		request : req,
		response : res,
		next : next
	});

	return clients.index();
});

router.put('/:id/status', function(req, res, next) {

	clients = new AdminClientController({
		request : req,
		response : res,
		next : next
	});
	return clients.changeStatus(req.params.id);
});

module.exports = router;
