exports.run = function(client, message, args, options) {

    // RUNS AN OPERATION; GOOD FOR DEBUGGING

if(message.author.id !== options.MyID) return;
    
    try {
        const code = args.join(" ").slice (args[0].length);
        let evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

        message.channel.send(evaled, {code:"xl"});
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
    }

}

exports.conf = {
    name: "eval",
    aliases: [],
}