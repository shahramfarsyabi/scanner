var router = express.Router();
var Auth = require('../controllers/authentication.js');

router.post('/signin', function(req, res, next) {
  
  var auth = new Auth({
  	request : req,
  	response : res,
  	next : next
  });

  auth.signin();

});

router.post('/signup', function(req, res, next) {
	
	var auth = new Auth({
		request : req,
		response : res,
		next : next
	});

	auth.signup();
});

module.exports = router;
