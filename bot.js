var HTTPS = require('https');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),

  botRegex = /(\s|^)(B|b)ot(\s|$)/;  botRegexFi = /\/5$/;botRegexBa = /\/(B|b)asic(.*)/
  botRegexAr = /\/(A|a)rena(.*)/;botRegexPr = /\/(P|p)restige(.*)/;
  botRegex6 = /\/(M|m)ap6$/;botRegex61 = /\/(M|m)ap6[.]1$/;botRegex62 = /\/(M|m)ap6[.]2$/;botRegex63 = /\/(M|m)ap6[.]3$/;
  botRegexDo = /\/(D|d)onations/;botRegexLe = /\/(L|l)egend$/;botRegexLi = /\/(L|l)ist$/;
  botRegexHg = /Graves/;botRegexFf = /(.*)(B|b)(R|r)(A|a|U|u)(H|h)(.*)/;botRegexBk = /(.*)(B|b)oss kill(.*)/;
  botRegexBi = /(.*)(B|b)itch(.*)/;
  
  var phraseArray = ["#?",
                    "#wtf",
                    "#saymyname",
                    "#24msgs",
                    "#legend",
                    "#iamgroot",
                    "#telomere",
                     "http://pix.iemoji.com/images/emoji/apple/ios-9/256/lion-face.png",
                    "#here"];
  var phrase = chooseRandom(phraseArray);
  var phraseArray2 = ["#2fast",
                    "#2furious",
                    "#ask any racer. any real racer",
                    "#for those 10 seconds or less, I'm free",
                    "#i'll have the tuna. no crust",
                    "#still a buster",
                    "#ejecto seato, cuz!",
                    "#too soon, junior",
                    "#it's a ho-asis in here, brah",
                    "#rideordie",
                    "#i never narc'd on nobody",
                    "#overnight parts from japan"];
  var phrase2 = chooseRandom(phraseArray2);

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(phrase);
    this.res.end();
  }
  else if(request.text && botRegexLi.test(request.text)) {
    this.res.writeHead(200);
    postMessage("- /test "\n"- /basic");
    this.res.end();
  } 
  else if(request.text && botRegexBi.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#thatbih");
    this.res.end();
  } 
  else if(request.text && botRegexAr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1sJtSVnjhhRNxpiuMR5uXrsTlrsXMjp9TNO7JHDXhtsk/htmlview?pli=1");
    this.res.end();
  }  
  else if(request.text && botRegexPr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/13oEg8HzEB11-il7o4mBDUpPx-s2hnPvRa1PSMgpxyYE/edit?usp=sharing");
    this.res.end();
  }
  else if(request.text && botRegexHg.test(request.text)) {
    this.res.writeHead(200);
    if(Math.random() >= 0.9)
      postMessage("http://pix.iemoji.com/images/emoji/apple/ios-9/256/lion-face.png");
    this.res.end();
  } 
  else if(request.text && botRegexFf.test(request.text)) {
    this.res.writeHead(200);
    postMessage(phrase2);
    this.res.end();
  } 
  else if(request.text && botRegexDo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("GO: 170k\nBC: 46k\nLO: 15k");
    this.res.end();
  }
  else if(request.text && botRegex6.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://marvelbitvachempionov.ru/wp-content/uploads/maps/aqmap6en.jpg");
    postMessage("https://docs.google.com/spreadsheets/d/1qi-3KOfLnI0c4YL4b9CB85e1OXw4HmtaVaCbbUR4aOs/htmlview");
    this.res.end();
  }
  else if(request.text && botRegex61.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://marvelbitvachempionov.ru/wp-content/uploads/maps/aqmap6-1en.jpg");
    this.res.end();
  }
  else if(request.text && botRegex62.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://marvelbitvachempionov.ru/wp-content/uploads/maps/aqmap6-2en.jpg");
    this.res.end();
  }
  else if(request.text && botRegex63.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://marvelbitvachempionov.ru/wp-content/uploads/maps/aqmap6-3en.jpg");
    this.res.end();
  }
  else if(request.text && botRegexLe.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://community.kabam.com/forums/showthread.php?650203-Hall-of-Legends&p=3307845#post3307845");
    this.res.end();
  }
  else if(request.text && botRegexFi.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/16113439_1441949889156689_6771627865109045810_o.jpg?oh=5b3c467aa14bc53b0d1ed19e3ac26aef&oe=596F2DF0");
    this.res.end();
  }
  else if(request.text && botRegexBa.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/15940423_1430227310328947_8798655967278199186_n.jpg?oh=2e45fab35fe0422dc32619b4b25a014c&oe=593181EF");
    this.res.end();
  }
  else if(request.text && botRegexBk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#bosskillah");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

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

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.respond = respond;
