var router = express.Router();
var Client = require('../controllers/user_controller.js');

router.use(function(req, res, next){

	if(!req.auth){
		return res.status(401).send({
			message : 'authorization faild'
		})
	}	

	next();

});

router.get('/me',
	function(req, res, next) {
		var client = new Client({
			request : req,
			response : res,
			next : next
		});

	  	client.index();
	}
);

module.exports = router;
