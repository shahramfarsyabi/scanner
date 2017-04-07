var router = express.Router();
var Invite = require('../controllers/invitation_controller.js');

router.use(function(req, res, next){

	if(!req.auth){
		return res.status(401).send({
			message : 'authorization faild'
		})
	}	

	next();

});

router.post('/',
	function(req, res, next) {
		var invitation = new Invite({
			request : req,
			response : res,
			next : next
		});

	  	invitation.send();
	}
);

module.exports = router;
