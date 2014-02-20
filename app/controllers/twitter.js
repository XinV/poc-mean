'use strict';

var twitter = require('ntwitter');
var io = require('socket.io').listen(3001, {log: false});

var twit = new twitter({
  consumer_key: 'consumer_key',
  consumer_secret: 'consumer_secret',
  access_token_key: 'access_token_key',
  access_token_secret: 'access_token_secret'
});

/**
 * Search REST API
 */
exports.search = function(req, res) {

  	twit.search(req.body.text,{count:100},function (err, data) {
      	res.jsonp(data);
    });

	//Tell the twitter API to filter on the watchSymbols
	twit.stream('statuses/filter', { track: req.body.text }, function(stream) {
	 
	  //We have a connection. Now watch the 'data' event for incomming tweets.
	  stream.on('data', function(tweet) {
	 
	    //This variable is used to indicate whether a symbol was actually mentioned.
	    //Since twitter doesnt why the tweet was forwarded we have to search through the text
	    //and determine which symbol it was ment for. Sometimes we can't tell, in which case we don't
	    //want to increment the total counter...
	    var claimed = false;
	 
	    //Make sure it was a valid tweet
	    if (tweet.text !== undefined) {
	 
	      //We're gunna do some indexOf comparisons and we want it to be case agnostic.
	      var text = tweet.text.toLowerCase();
	 
	      //Go through every symbol and see if it was mentioned. If so, increment its counter and
	      //set the 'claimed' variable to true to indicate something was mentioned so we can increment
	      //the 'total' counter!

	      claimed = true;
	 
	      //If something was mentioned, increment the total counter and send the update to all the clients
	      if (claimed) {
	          //Send to all the clients
	          console.log("io SOCKET "+io+" *");
	          //io.emit('data', {text:"hola"});
	          io.sockets.emit('newTweet', tweet);
	      }
	    }
	  });
	});  	

};