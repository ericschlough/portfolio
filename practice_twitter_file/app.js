//app.js
var express = require('express');
var app = express();
var Twitter = require('twitter');
var config = require('./config.js');


//////////////////////////EXPRESS SETUP//////////////////////////////////////////
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: '.'});
});

// app.post('/submit-student-data', function (req, res) {
//     var firstname = req.body.firstName; 
//     var lastname = req.body.lastName;
//     res.send('<p id = "first">' + firstname + '</p>' + ' ' + '<p id = "last">'+  lastname + '</p>' + ' Submitted Successfully!' + '<br/>' + 'Here is what was found on Twitter!' + '<br/><br/>');
// });
/////////////////////////////////////////////////////////////////////////////////



/////////////////////////////TWITTER CODE////////////////////////////////////////
app.post('/submit-student-data', function (req, res) {
  var T = new Twitter(config);
  var info = '';
  var name = req.body.firstName + ' ' + req.body.lastName;

  // Set up search parameters
  var params = {
    q: 'america',
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