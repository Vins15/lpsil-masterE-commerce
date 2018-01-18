var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var logger = require('log4js').getLogger('Server');
var bodyParser = require('body-parser');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var http = require('http');
var dateFormat = require('dateformat');
var mysql = require('mysql');
var url = "http://localhost:1313/";
var connection = mysql.createConnection({
	host: "localhost",
	user:"root",
	password: "",
	database: "mydb"
});
connection.connect(function(err){
	 if (err) throw err;
  connection.query("SELECT * FROM article", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


// config
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined')); // Active le middleware de logging
app.use(cookieParser());
app.use(session({secret: 'anythinggottruer', saveUnititialized: true, resave: true}));


app.use(express.static(__dirname + '/public')); // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)

logger.info('server start');


app.get('/', function(req, res){
	res.redirect('login');
});


app.post('/login', function (req, res){
	res.end(JSON.stringify(req.body));
	if(req.body.username == 'admin' && req.body.password =='admin'){
		session.id = req.body.username;
}
});

app.get('/login', function(req, res){
    res.render('login');
});

app.post('/main', function (req, res){
	
});

app.get('/main', function(req, res){
    res.render('main');
});



app.listen(1313);

