//app.js
var express = require('express');
var app = express();
var Twitter = require('twitter');
var config = require('./config.js');


//////////////////////////EXPRESS SETUP//////////////////////////////////////////
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('src'));

// app.get('/', function (req, res) {
//     res.sendFile('Home_Page.html', { root: '.'});
// });

/////////////////////////////////////////////////////////////////////////////////



/////////////////////////////TWITTER CODE////////////////////////////////////////
app.post('/submit-student-data', function (req, res) {
  var T = new Twitter(config);
  var info = '';
  var name = req.body.firstName + ' ' + req.body.lastName;

  // Set up search parameters
  var params = {
    q: name,
    count: 1,
    result_type: 'recent',
    lang: 'en'
  }
  // Initiate search using the above paramaters
  T.get('search/tweets', params, function search (err, data) { 

    //console.log(data);
    
    if(!err){

      for(let i = 0; i < data.statuses.length; i++){
        let screen_name = data.statuses[i].user.screen_name;
        let text = data.statuses[i].text;
        
        info += screen_name;
        info += text;
        info += "\n";
        //console.log(info);
      }

    } else {
      console.log(err);
    }
    console.log(info);
    res.send(name + ' Submitted Successfully!' + '<br/>' + 'Here is what was found on Twitter!' + '<br/><br/>' + info);

  });
})
///////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////SERVER SETUP/////////////////////////////////////////////
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});