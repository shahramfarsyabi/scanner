mongoose.connect('mongodb://localhost:27017/usa-test-01');
global.app = express();

// Serve Static Files
app.use(express.static('public'));
// End

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', 
	exphbs({
		defaultLayout: 'main'
	})
);

app.set('view engine', 'handlebars');

// Check user authentication & authorization
app.use(function(req, res, next){
	authMiddleware(req, res, next);
});

global.backofficeSecureMiddleware = function checkAuth (req, res, next) {
	// console.log(req.session);
	if (!_.has(req.session, 'auth') || !req.session.auth) {
		return res.redirect('/admin/signin');		
	}

	next();
}

/**
 * Client Routes
 */
var products = require('../app/routes/products.js');
var auth = require('../app/routes/auth.js');
var invite = require('../app/routes/invite.js');
var profile = require('../app/routes/profile.js');

/**
 * Admin Routes
 */
var admin_products = require('../app/routes/admin_products.js');
var admin_users = require('../app/routes/admin_users.js');
var admin_invitation = require('../app/routes/admin_invitation.js');
var admin_auth = require('../app/routes/admin_auth.js');
var admin_dashboard = require('../app/routes/admin_dashboard.js');

app.use(session({
  secret: 'WatchDogNodeJSExpress',
  // cookie: { secure: true },
  resave: false,
  saveUninitialized: true
}));

app.use('/api/v1/products', products);
app.use('/api/v1/auth', auth);
app.use('/api/v1/user/:id/invite', invite);
app.use('/api/v1/user/:id', profile);

app.use('/admin', admin_auth);
app.use('/admin/dashboard', admin_dashboard);
app.use('/admin/products', admin_products);
app.use('/admin/users', admin_users);
app.use('/admin/invite', admin_invitation);

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
});
