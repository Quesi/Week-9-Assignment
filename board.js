var express = require('express');
var app = express();
//set port
app.set('port', process.env.PORT || 3000);

// set up handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// set up the public directory to serve static files
app.use(express.static(__dirname + '/public'));

//body parser -- for form processing
app.use(require('body-parser').urlencoded({extended:true}));

// bring in db credentials
var credentials = require('./credentials.js');

// mongoose
var mongoose = require('mongoose');
mongoose.connect(credentials.mongo);

// model
var Message = require('./models/message.js');

// ------ routes -------- //


/*
	var image1 = new User({
	title : 'firstImage',
	author : "Kwesi",
	imageUrl : 'image1.jpg',
	comments : 'testing'	}).save(function(err){
		if (err){ console.log(err); }
		res.send('saved');
	});
});
*/

app.get('/',function(req,res){
	es.render('index',context);
});

/*
// show all the top-level (parent) messages

app.get('/1',function(req,res){
	Message.find({}).sort({datetime:-1}).exec(function(err,msgs){
		var context = {messages:msgs};
		res.render('index',context);
	});
	//Room.find({}).sort({date: -1}).exec(function(err, docs) { ... });

});

app.get('/all',function(req,res){
	Message.find(function(err,msgs){
		res.json(msgs);
	});
})

app.get('/new',function(req,res){
	res.render('post_form');
});

// show a thread
app.get('/thread/:id',function(req, res){
	Message.findById(req.params.id, function (err, doc){
		//var context = {messages: doc};
		res.render('thread',doc);
	});
});

//
// add new thread
app.post('/post',function(req, res){
	var image1 = new User({
	title : 'firstImage',
	author : "Kwesi",
	imageUrl : "/image1.jpg",
	comments : 'testing'}).save(function(err){
		if (err){ console.log(err); }
		//res.send('saved');
		res.redirect('/');
	});
});

// add reply to existing thread
app.post('/post/:parentId',function(req, res){
	var obj = {};
	obj.body = req.body.messagebody;
	obj.username = req.body.username;
	Message.findById(req.params.parentId, function (err, doc){
		if (err){
			console.log(err);
			res.render('500');
		}
	  	doc.replies.push(obj);
	  	doc.save();
	  	//res.send("Saved reply");
	  	res.redirect('/thread/'+req.params.parentId);
	});
});

*/


/*

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gallerySchema = new Schema({
  title:  String,
  author: String,
  imageUrl:  Object,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },

});

var User = mongoose.model('User', gallerySchema);


var image1 = new User({
title : 'firstImage',
author : "Kwesi",
imageUrl : "/image1.jpg",
comments : 'testing'

});

image1.save(function (err, data) {
if (err) console.log(err);
else console.log('Saved : ', data );
});
*/



// 404
app.use(function (req,res,next) {
	res.status(404);
	res.render('404');
});

// 500
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

// listen
app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
