const Discord = require('discord.js');   // const is a unchanchable variables

var client = new Discord.Client();

const fs = require("fs");

const settings = require ("./settings.json");

const { Collection } = require ("discord.js");

const options = require ("./options");

var prefix = settings.prefix;

const fuzzimageEvent = (event) => require("./fuzzimages");
client.on("message", fuzzimageEvent("message"));

// Event loader
fs.readdir("./events/", (err, files) => {
    // ACTIVATES ALL EVENTS
});

client.commands = new Collection();
client.aliases = new Collection();

// Load commands
fs.readdir('./commands/', (err, files) => {
    // LOADS ALL COMMANDS & ALIASES
});

client.on ("message", (message) => {

    if (message.author.bot) return;

    const args = message.content.split (' ');

    var msg = message.content.toLowerCase();

    try {
        // :eyes:
    } catch (err) {
    }

    // DM HANDLER
    try {
    if (message.channel.type === "dm") {
        // HANDLES DM's
    }
    }
    catch (err) {
        options.catchError (message, err, "Send invite link (fuzzmain)", client)
    }

    // RUN COMMAND UNDER @FUZZBOT or F!COMMAND

    // REDIRECT DM's
    try {
    if (message.channel.type === "dm") {
        // REDIRECTS DMS TO ME
    }
    }
    catch (err) {

    }
    
});

function runCommand (client, message, args, options, command) {

    // RUNS A COMMAND

}

client.login(settings.token);