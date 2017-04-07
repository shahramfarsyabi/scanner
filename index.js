global.base_dir = __dirname;

global.authMiddleware = require(base_dir+'/app/auth-middleware.js');
global.fn = require(base_dir+'/app/helpers.js');

require(base_dir+'/bootstrap/providers.js');
require(base_dir+'/bootstrap/start.js');
