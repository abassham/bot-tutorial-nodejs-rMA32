var HTTPS = require('https');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),

  botRegex = /(\s|^)(B|b)ot(\s|$)/;  botRegexFi = /\/5$/;botRegexBa = /\/(B|b)asic(.*)/
  botRegexAr = /\/(A|a)rena(.*)/;botRegexPr = /\/(P|p)restige(.*)/; botRegexCa = /\/(C|c)alc(.*)/;botRegexLa = /\/(L|l)ol$/;
  botRegexLt = /\/(L|l)olteam$/;botRegex6 = /\/(M|m)ap6$/; botRegexDo = /\/(D|d)onations/;botRegexLe = /\/(L|l)egend$/;botRegexLi = /\/(L|l)ist$/;
  botRegexHg = /Graves/;botRegexFf = /(.*)(B|b)(R|r)(A|a|U|u)(H|h)(.*)/;botRegexBk = /(.*)(B|b)oss kill(.*)/;
  botRegexBi = /(.*)(B|b)itch(.*)/; botRegexSt = /\/(S|s)treak(.*)/; botRegexCo = /\/(C|c)ost(.*)/;
  
  var phraseArray = ["#?",
                    "#wtf",
                    "#saymyname",
                    "#legend",
                    "#iamgroot",
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
  else if(request.text && botRegexSt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://drive.google.com/open?id=0B20CcFiEk3ngUm90b0pIN2xhQ1U");
    this.res.end();
  }
  else if(request.text && botRegexLi.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://dl.dropboxusercontent.com/s/73aowbf0im8njz4/list.png");
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
  else if(request.text && botRegexCa.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1yeQ7NbFMmJKWQKH8fLV7tTDdygAB1ECl5ag4LIXnxgM/copy");
    this.res.end();
  }
  else if(request.text && botRegexLa.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://dl.dropboxusercontent.com/s/osgdqoayj2yya2z/Photo%20Jun%2028%2C%2011%2050%2042%20AM.jpg");
    this.res.end();
  }
  else if(request.text && botRegexLt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://dl.dropboxusercontent.com/s/vvsxopis9mrnch7/4lol.jpg");
    postMessage("https://dl.dropboxusercontent.com/s/bro25izioecjogm/5lol.jpg");
    postMessage("https://dl.dropboxusercontent.com/s/5cbdj1qmgwqrv8r/5lolinst.png");
    this.res.end();
  }
  else if(request.text && botRegexCo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://dl.dropboxusercontent.com/s/uk6dl2m5rme32nd/Photo%20Jun%2028%2C%2011%2048%2040%20AM.jpg");
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
    postMessage("GO: 117k\nBC: 26k\nLO: 11k");
    this.res.end();
  }
  else if(request.text && botRegex6.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://dl.dropboxusercontent.com/s/krj1s7rd2fx04ax/Photo%20Jun%2028%2C%2011%2052%2028%20AM.jpg");
    postMessage("https://dl.dropboxusercontent.com/s/rd3mhvv37i9c4n3/Photo%20Jun%2028%2C%2011%2052%2030%20AM.jpg");
    postMessage("https://dl.dropboxusercontent.com/s/pwaa3bwsj7odlpd/Photo%20Jun%2028%2C%2011%2052%2032%20AM.jpg");
    this.res.end();
  }
  else if(request.text && botRegexLe.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://community.kabam.com/forums/showthread.php?650203-Hall-of-Legends&p=3307845#post3307845");
    this.res.end();
  }
  else if(request.text && botRegexFi.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://drive.google.com/open?id=0B20CcFiEk3ngQlBma2ZWTklhYTQ");
    this.res.end();
  }
  else if(request.text && botRegexBa.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://dl.dropboxusercontent.com/s/8w5bcib9wdeqgo1/Photo%20Jun%2028%2C%2011%2048%2054%20AM.jpg");
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
