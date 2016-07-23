var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^Conquistabot cool guy me$/;
	  helloRegex = /^Conquistabot how are you$/;
	  dogRegex = /^Conquistabot dawg face$/;
	  introRegex = /^Conquistabot introduce yourself$/;
	  helpRegex = /^Conquistabot help$/;
	  cutRegex = /^Conquistabot who's getting in the cut today$/;
	  zetaxiRegex = /^Conquistabot Zeta Xi founders$/
	  
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
    postDogFace();
    this.res.end();
  }else if(request.text && introRegex.test(request.text)){
    this.res.writeHead(200);
    postIntro();
    this.res.end();
  }else if(request.text && cutRegex.test(request.text)){
    this.res.writeHead(200);
    postCut();
    this.res.end();
  }else if(request.text && zetaxiRegex.test(request.text)){
    this.res.writeHead(200);
    postZetaXiFounders();
    this.res.end();else {
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


function postDogFace() {
  var botResponse, options, body, botReq, rand;

  rand = Math.floor((Math.random() * 9) + 0);
  dogs = [
	'https://media.giphy.com/media/Llhp3CviKCKWc/giphy.gif',
	'https://media.giphy.com/media/OsVHDytNJNQ7m/giphy.gif',
	'http://flashfunpages.com/ecards/wp-content/uploads/2015/02/funnydogfaces-darn.jpg',
	'http://www.amusingtime.com/images/016/funny-face-of-a-dog-31.jpg',
	'http://img.huffingtonpost.com/asset/crop_0_309_1750_1123,scalefit_630_noupscale/55ce177014000077002e2f0e.jpeg',
	'http://www.funnydogsite.com/pictures/Funny_Dog_Face132.jpg',
	'http://barkpost.com/wp-content/uploads/2014/05/a.baa-Funny-dog-face-in-water.jpg',
	'https://media.giphy.com/media/3orieRftQRDJLIlpQc/giphy.gif',
	'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg'
  ]
  
  botResponse = dogs[rand];

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


function postCut() {
  var botResponse, options, body, botReq, rand, rand2;

  rand = Math.floor((Math.random() * 32) + 0);
  members = [
	'Aaron',
	'Abarca',
	'Alexa',
	'Ana',
	'Ayala',
	'B Savage',
	'Badger',
	'Brenda',
	'Brosman',
	'Chris Rodriguez',
	'Emily',
	'Fronklin',
	'Gilberto',
	'Gladis',
	'Jess',
	'Joel',
	'Juan',
	'Carina',
	'Los',
	'Melissa',
	'Miguel',
	'Nathan',
	'Nick',
	'Marco',
	'Paola',
	'James',
	'Rob',
	'Rodrigo',
	'Sasha',
	'Taylor',
	'Tre',
	'Dakota'
  ]
  
  rand2 = Math.floor((Math.random() * 12) + 0);
  quote = [
	', you not down fool!',
	', andale por pendej@',
	', assume the position',
	', te aguantas o te jodes',
	', bring dat ass here boi',
	', te dije que siendo Greek no te conviene',
	', RIP dat ass',
	', quita la mano',
	', with a purpose',
	', querias pledge ahora te aguantas',
	', no pain no gain',
	', con fuerza'
  ]
  
  memberResponse = members[rand];
  quoteResponse = quote[rand2];
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : memberResponse + quoteResponse
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

function postZetaXiFounders() {
  var botResponse, options, body, botReq;

  botResponse = "*Stomps foot twice*\n #1: Ana Gonzalez\n #2: Brenda Crts\n #3: Emily Fowler\n";

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