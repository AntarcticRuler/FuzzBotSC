const options = require ("../options");

exports.run = async (client) => {

    options.client = client;
    options.defineVars();

    options.fuzzbotUsersUpdate();

    var startEmbed = new options.Discord.RichEmbed();
    startEmbed.setDescription("**FUZZBOT HAS BEEN STARTED**");
    options.logSend(startEmbed);
    
};