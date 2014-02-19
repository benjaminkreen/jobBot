// Just enter the channel and server and run in node

var config = {
  channels: [],
  server: "",
  botName: "jobBot"
};

var irc = require('irc');
var jobMaker = require('./jobMaker')


var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

bot.addListener("message", function(from, to, text, message) {
  console.log(message);
  var nick = message.nick;
  if(message.args[1].match(/jobBot/g) && (nick.slice(-3, nick.length).toLowerCase() != 'bot')){
    if(message.args[1].match(/help/g)){
  	  bot.say(config.channels[0], "Hi, I make random job posts");
    } else {
      var job = new jobMaker.randomJobPost();
  	  bot.say(config.channels[0], "Title: " + job.title);
      bot.say(config.channels[0], "Requirements:");
      for(var i = 0; i < job.requirements.length; i++){
        bot.say(config.channels[0], "** " + job.requirements[i])
      };
      bot.say(config.channels[0], "Perks:");
      for(var i = 0; i < job.perks.length; i++){
        bot.say(config.channels[0], "** " + job.perks[i])
      };
    }
  }
});
