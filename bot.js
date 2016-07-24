var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      //botRegex = /^Conquistabot cool guy me$/;
	  //helloRegex = /^Conquistabot how are you$/;
	  dogRegex = /^Conquistabot dawg face$/;
	  introRegex = /^Conquistabot introduce yourself$/;
	  helpRegex = /^Conquistabot help$/;
	  cutRegex = /^Conquistabot who's getting in the cut today$/;
	  zetaxiRegex = /^Conquistabot Zeta Xi founders$/;
	  deltadeltaRegex = /^Conquistabot Delta Delta founders$/;
	  ddBetaRegex = /^Conquistabot DD Beta line$/;
	  ddGammaRegex = /^Conquistabot DD Gamma line$/;
	  ddDeltaRegex = /^Conquistabot DD Delta line$/;
	  ddEpsilonRegex = /^Conquistabot DD Epsilon line$/;
	  ddZetaRegex = /^Conquistabot DD Zeta line$/;
	  
  /*if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  }else if(request.text && helloRegex.test(request.text)){
    this.res.writeHead(200);
    postResp();
    this.res.end();
  }*/
  if(request.text && dogRegex.test(request.text)){
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
    this.res.end();
  }else if(request.text && deltadeltaRegex.test(request.text)){
    this.res.writeHead(200);
    postDeltaDeltaFounders();
    this.res.end();
  }else if(request.text && ddBetaRegex.test(request.text)){
    this.res.writeHead(200);
    postDDBetaLine();
    this.res.end();
  }else if(request.text && ddGammaRegex.test(request.text)){
    this.res.writeHead(200);
    postDDGammaLine();
    this.res.end();
  }else if(request.text && ddDeltaRegex.test(request.text)){
    this.res.writeHead(200);
    postDDDeltaLine();
    this.res.end();
  }else if(request.text && ddEpsilonRegex.test(request.text)){
    this.res.writeHead(200);
    postDDEpsilonLine();
    this.res.end();
  }else if(request.text && ddZetaRegex.test(request.text)){
    this.res.writeHead(200);
    postDDZetaLine();
    this.res.end();
  }else if(request.text && helpRegex.test(request.text)){
    this.res.writeHead(200);
    postHelp();
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
	'Gladiz',
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

  botResponse = "*Stomps foot twice*\n #1: Ana Gonzalez\n #2: Brenda Crts\n #3: Emily Fowler\n #4: Gladiz Lopez\n #5: Melissa Banuelos\n #6: Paola Mansilla\n #7: Jess Banuelos\n #8: Brittani Savage\n #9: Sasha Martin\n #10: Alexa Akana\n #11: Carina Jimenez";
  //botResponse = "*Stomps foot twice*";
  
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


function postDeltaDeltaFounders() {
  var botResponse, options, body, botReq;

  botResponse = "#1: Alex Sanchez\n #2: Andrew Abarca\n #3: Andrew Brosman\n #4: Joel Dalton\n #5: Jonathan Rife\n #6: Nick Ramos\n #7: Robert Green\n #8: Juan Boyd\n #9:Cesar Pulido\n #10: Carlos Huezo\n #12: Tre Griffin";
  
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


function postDDBetaLine() {
  var botResponse, options, body, botReq;

  botResponse = "#3: Alex 'El Vencedor' Ayala\n #4: Fernando 'El Cruzado' Colon\n #6: Chris 'Maximus' Rodriguez";
  
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

function postDDGammaLine() {
  var botResponse, options, body, botReq;

  botResponse = "#1: Chris 'Maui' Peritore\n #2: Marco 'Tlaloc' Hinojosa";
  
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

function postDDDeltaLine() {
  var botResponse, options, body, botReq;

  botResponse = "#1: Aaron 'El Gaucho' Gonzalez\n #2: James 'Tonatiuh' Tapia";
  
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

function postDDEpsilonLine() {
  var botResponse, options, body, botReq;

  botResponse = "#1: Miguel Palillero\n #2: Rodrigo Hinojosa";
  
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

function postDDZetaLine() {
  var botResponse, options, body, botReq;

  botResponse = "#1: Gilberto Perez\n #2: Taylor Gentry\n #4: Dakota Vera\n #5: Nathan Cordero";
  
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

function postHelp() {
  var botResponse, options, body, botReq;

  botResponse = "Type any of the following commands (case sensitive)\n\nConquistabot introduce yourself\n Conquistabot dawg face\n Conquistabot who's getting in the cut today\n Conquistabot Zeta Xi founders\n Conquistabot Delta Delta founders\n Conquistabot DD Beta line\n Conquistabot DD Gamma line\n Conquistabot DD Delta line\n Conquistabot DD Epsilon line\n Conquistabot DD Zeta line";
  
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