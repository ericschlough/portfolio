//app.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
// Set up search parameters
var params = {
  q: 'america',
  count: 1000,
  result_type: 'popular',
  lang: 'en'
}
// Initiate search using the above paramaters
T.get('search/tweets', params, function search (err, data) { 

  console.log(data);
  
  if(!err){

    for(let i = 0; i < data.statuses.length; i++){
      let screen_name = data.statuses[i].user.screen_name;
      let text = data.statuses[i].text;
      if(screen_name === 'realDonaldTrump'){
        console.log(screen_name);
        console.log(text + "\n");
      }
    }

  } else {
    console.log(err);
  }

});


