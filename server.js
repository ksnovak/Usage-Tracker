// BASE SETUP
var config 		= require('./config');
var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');

var mongoose	= require('mongoose');
mongoose.connect('mongodb://' + config.db.user + ':' + config.db.password +'@ds129066.mlab.com:29066/tracker', { useMongoClient: true })

//Models?
var Definition	= require('./models/definition')
var Instance 	= require('./models/instance')
var Occurrence 	= require('./models/occurrence')


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// ROUTES FOR API
var router = express.Router();

//Every request passes through this
router.use(function(req, res, next) {
	console.log("I'm a logger!");
	next();
})

router.get('/', function(req, res) {
	console.log('yo');
	res.json({ message: 'Welcome to the API' });
});

//Need to set this up for each separate route file
require('./routes/definition')(router);


app.use('/api', router);

app.listen(3000);