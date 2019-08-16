var Discord = require ('discord.js');
var settings = require ('./settings.json');

module.exports = { 
    Discord: Discord,

    client: undefined,

    defineVars: function (client) {
    
    },

    nickSend: function (sendMessage) {
        
    },

    logSend: function (sendMessage) {
        
    },

    fDMSend: function (sendMessage) {
        
    },

    emoji: function (id) {
        
    },

    fuzzbotUsersUpdate: function () {
        // UPDATES AMOUNT OF USERS
    },

    catchError: function (message, err, fileName, client) {
        // CATCHES ERROR
    },

    contains: function(target, pattern){
        var value = 0;
        pattern.forEach(function(word){
          value = value + target.includes(word);
        });
        return (value === 1)
    }
    
}