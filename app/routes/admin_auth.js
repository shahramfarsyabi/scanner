var router = express.Router();
var Auth = require('../admin_controllers/auth_admin.js');

router.get('/signin', function(req, res, next) {
	
	var auth = new Auth({
		request : req,
		response : res,
		next : next
	});

	auth.signin();
});

router.post('/signin', function(req, res, next) {
  
  var auth = new Auth({
  	request : req,
  	response : res,
  	next : next
  });

  auth.authorize();

});

router.get('/signout', function(req, res, next) {
	req.session.auth = false;
	req.session.user = {};
	req.session.save(function(err){});
	
	return res.redirect('/admin/signin');
});

module.exports = router;
