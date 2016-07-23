var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^Conquistabot cool guy me$/;
	  helloRegex = /^Conquistabot how are you$/;
	  dogRegex = /^Conquistabot dog me$/;
	  introRegex = /^Conquistabot introduce yourself/;
	  helpRegex = /^Conquistabot help/;
	  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  }else if(request.text && helloRegex.test(request.text)){
    this.res.writeHead(200);
    postResp();
    this.res.end();
  }else if(request.text && dogRegex.test(request.text)){
    this.res.writeHead(200);
    dogMe();
    this.res.end();
  }else if(request.text && introRegex.test(request.text)){
    this.res.writeHead(200);
    postIntro();
    this.res.end();
  }else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = cool();

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


function postResp() {
  var botResponse, options, body, botReq;

  botResponse = 'I am alive!';

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


function dogMe() {
  var botResponse, options, body, botReq, rand;

  rand = Math.floor((Math.random() * 3) + 0);
  dogs = [
	'https://media.giphy.com/media/Llhp3CviKCKWc/giphy.gif',
	'https://media.giphy.com/media/OsVHDytNJNQ7m/giphy.gif',
	'http://flashfunpages.com/ecards/wp-content/uploads/2015/02/funnydogfaces-darn.jpg',
	'https://media.giphy.com/media/3orieRftQRDJLIlpQc/giphy.gif'
  ]
  
  botResponse = dogs[rand];
  botResp2 = 'hello'

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse,
	"text2" : botResp2
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postIntro() {
  var botResponse, options, body, botReq;

  botResponse = 'I am the ACE of this chat! I live for this chat, I breathe for this chat, but most importantly...I DIE FOR MY FRAT! Type the command "Conquistabot help" to see what I can do';

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;