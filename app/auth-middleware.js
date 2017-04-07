function middleware(req, res, next){

	var token = '';

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      token = req.query.token;
    }

    if(token.length){

		return jwt.verify(token, process.env.privateKey, function(err, decoded) {
			
			if(err){
				res.status(401).send({
					message : 'authorization faild'
				});

				return;
			}

			var userModel = require(base_dir+'/app/models/user_model.js');
			userModel.findOne({
				_id : decoded._id
			}, function(error, user){
				
				if(error){
					return;
				}

				if(user){
					req.auth = true;
					req.client = user;
					return next();
				}

				req.auth = false;
				req.client = {};
				next();				
			});

		});    	
    }
	
    next();	
}

module.exports = middleware;