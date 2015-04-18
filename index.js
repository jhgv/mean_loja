var express 	 	   = require('express'),
	app 	 	 	   = express(),
	path 	 	 	   = require('path'),
	mongoose 	 	   = require('mongoose'),
	bodyParser   	   = require('body-parser'),
	multer  		   = require('multer'),
	produtosController = require('./server/controllers/produtos-controller');


var done = false;

mongoose.connect('mongodb://localhost:27017/loja-db');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

/*Configuring the multer.*/
app.use(multer({
	dest: './uploads/',
	rename: function (fieldname, filename) {
		return filename+Date.now();
	},
	onFileUploadStart: function (file) {
	  // console.log(file.originalname + ' is starting ...');
	},
	onFileUploadComplete: function (file) {
	  // console.log(file.fieldname + ' uploaded to  ' + file.path)
	  done=true;
	}
}));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/client'));

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, '/client/views', 'index.html'));
});

//IMAGES
app.post('/api/upload',function(req,res){
	if(done){
		console.log(req.files);
    	// res.end("File uploaded");
	}else{
		console.log("falhou");
	}
});

//REST API
app.get('/api/produtos', produtosController.list);
app.post('/api/produtos', produtosController.create);


//START SERVER LISTENING
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
