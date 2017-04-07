require('dotenv').config({ 
	path: base_dir+"/.env"
});

global.express = require('express');
global.exphbs  = require('express-handlebars');
// global.mongodb = require('mongodb');
global.mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
global.bodyParser = require('body-parser');
global.bwipjs = require('bwip-js');
bwipjs.loadFont('Inconsolata', 108,require('fs').readFileSync(base_dir+'/fonts/Inconsolata.otf', 'binary'));
global.database = {};
global._ = require('underscore');
global.AdminController = require('../app/admin_controllers/admin_basecontroller.js');
global.md5 = require('md5');
global.moment = require('moment');
global.cookieParser = require('cookie-parser');
global.session = require('express-session');
global.expressjwt = require('express-jwt');
global.validator = require('validatorjs');
global.nodemailer = require('nodemailer');
global.smtpTransport = require('nodemailer-smtp-transport');
global.jwt = require('jsonwebtoken');
global.mandrill = require('node-mandrill')('mandril_api_key');
