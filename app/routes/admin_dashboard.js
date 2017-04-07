var router = express.Router();

router.get('/', function(req, res, next) {
	console.log(req.session)
	if(req.session.auth){
		return res.render('dashboard');
	}

	return res.redirect('/admin/signin');
});

module.exports = router;
