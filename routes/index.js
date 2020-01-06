var express = require('express');
var Twitter = require('twitter');

var router = express.Router();

const T = new Twitter({
  consumer_key:               'zdjR5WJk0nHm7Y8Td9Cb12vdP'
  , consumer_secret:          'INlzlyAT3WMMSWF8TC57IsyFzlo7E00heMyWxUrAFR5lM2GLlw'
  , access_token_key:         '1149832237468332039-VKuQUNCqZjJQM0mfRZ9DzOcw3WYPEF'
  , access_token_secret:      'x24SVlZTEK1uzVQReVX7jm3s241BZywEHoDMcg3Euf2LE'
});

/* GET home page. */
router.get('/', function(req, res, next) {

  // Get twiiter data and send back to index page
  var params = {id:'1'}
  T.get('trends/place', params, function(err, data, response) {
      if (!err){
        var tweets = data;
        res.render('index', { title: 'Twitter Popularity Tracking', trends:tweets});
      } else {
          console.log(err);
      }
  });
});

module.exports = router;
