const unirest = require ("unirest");

const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

// Shuffles an array (not mine)
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

exports.run = function(client, message, args, options) {

    // MY MOST COMPLICATED COMMAND; DELIVERS A RANDOM QUIZ USING AN API
   
};
    
exports.conf = {
    name: "quiz",
    aliases: [],
}