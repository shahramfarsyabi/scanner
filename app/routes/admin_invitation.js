var router = express.Router();

var AdminInvitationController = require('../admin_controllers/invitation_admin.js');

router.use(backofficeSecureMiddleware);
/* GET products listing. */
router.post('/', function(req, res, next) {

	clients = new AdminInvitationController({
		request : req,
		response : res,
		next : next
	});

	return clients.sendInvitation();
});

module.exports = router;
