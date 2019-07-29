const server = require('server');

var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
	console.log('Data [%s]', data);
};

var Twitter = require('twitter-node-client').Twitter;
server(ctx => 'Hello');

 //    var twitter = new Twitter();
	
	// // //Example calls

	// twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);
	
	// twitter.getMentionsTimeline({ count: '10'}, error, success);
	
	// twitter.getHomeTimeline({ count: '10'}, error, success);
	
	// twitter.getReTweetsOfMe({ count: '10'}, error, success);
	
	// twitter.getTweet({ id: '1111111111'}, error, success);

	
	// //
	// // Get 10 tweets containing the hashtag haiku
	// //

	// twitter.getSearch({'q':'#haiku','count': 10}, error, success);
	
	// //
	// // Get 10 popular tweets with a positive attitude about a movie that is not scary 
	// //

	// twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);


// ConfigurationBuilder cb = new ConfigurationBuilder();
// cb.setDebugEnabled(false).setOAuthConsumerKey("MNHFspgwe5uYNbjqX96xriMW6");
// cb.setOAuthConsumerSecret("omlY3j9P5lFzt2ifEo9ceagpDFABt6gkB6DJaf11jMrByXmU40");
// cb.setOAuthAccessToken("737772535-gMwTkVpg4Z56aBGhHCJEqNbyMrOrolyvHpNrX5QB");
// cb.setOAuthAccessTokenSecret("ZSh8zRh5nEzwVV9CLHuHIr1Zp6tzsPHKSkHTRUHvD8vBl");
// TwitterFactory tf = new TwitterFactory(cb.build());
// Twitter twitter = tf.getInstance();
// int count = 0, tweetCount = 0;
// Query query = new Query("Football");
// query.setLang("en");
// QueryResult result;
