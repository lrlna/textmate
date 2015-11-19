var fs = require("fs");
var path = require("path");
var promzard = require("promzard");
var prompt = require("prompt");

function Config() {
  this.argv = 0;
}

// check if config.json exists
// if exists -- warn user file exists
Config.prototype.exists = function() {
  fs.stat(textrc, function(err, stat) {
    if(err === null) {
      return true;
    } else {
      return false;
    } 
  })
}

Config.prototype.init = function() {
  var textrc = path.join(__dirname, "config.json");
  
  // warn user what's happening.
  console.log([
    "Hey! This is your friendly text module initialization.", 
    "I am going to walk you through setting up your config.",
    "",
    "Have your Twilio keys ready before we begin!",
    "",
    "ctrl-c at anytime if you wish to quit this setup process"
  ].join("\n"))

  promzard("./src/setup.js", function(err, data) {
    if (err) console.log(err);
    config.writeFile(data);
  })
}

Config.prototype.writeFile = function() {
    
}
// ask if want to overwrite
// if yes, overwrite twilio id's
// if does not exist, create a file
// then ask user for twilio information

module.exports = Config;
