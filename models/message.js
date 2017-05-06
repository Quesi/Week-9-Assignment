//var gallerySchema = new Schema({
//  title:  String,
//  author: String,
//  imageUrl:  Object,
//  comments: [{ body: String, date: Date }],
//  date: { type: Date, default: Date.now },

//});

//var User = mongoose.model('User', gallerySchema);


/*
var image1 = new Schema({
title : 'firstImage',
author : "Kwesi",
imageUrl : "/image1.jpg",
comments : 'testing'
});

image1.save(function (err, data) {
if (err) throw err;

  else console.log('Saved : ', data );
});

*/

/********************************************/

var mongoose = require('mongoose');

var msgSchema = mongoose.Schema({
    username: String,
    datetime: {
    	type:Date,
    	default:Date.now
    },
    title: String,
    body: String,
    replies: [{
    	body: String,
    	username: String,
    	datetime: {
    		type:Date,
    		default:Date.now
    	}
    }]

});

var Message = mongoose.model('Message', msgSchema);
module.exports = Message;
