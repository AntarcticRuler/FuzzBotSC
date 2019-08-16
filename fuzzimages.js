const options = require ("./options");
const settings = require ("./settings.json");

const prefix = settings.prefix;

module.exports = (message) => {

msg = message.content.toLowerCase ();
mMsg = message;

try {

if (message.author.bot) return; // Ignores bots
var mention = message.mentions.users.first();

// *** EMOJIS ***
if (msg.includes (`-dab-`)) {
    mMsg.channel.send (options.emoji("427970559931056138") + options.emoji("427970568290304001") + options.emoji("427970576423059466"));
}
ePost ("dab2", "488529645575077888");

ePost ("im", "430896983876567050");
ePost ("@", "430896983876567050");

ePost ("woah", "500277466942799873");

ePost ("dance", "525021163722637312");

ePost ("mad", "470372623528755200");

ePost ("lul", "525024741875253248");

ePost ("monokuma", "430893754371670016");

ePost ("awoo", "525021925165236251");

ePost ("pikapalm", "525022117578670090");

ePost ("lolice", "525022453941010433");

ePost ("kms", "525022615618846750");

ePost ("no u", "525022870867279892");
ePost ("nou", "525022870867279892"); 

ePost ("lewd", "526492888574459919"); 

ePost ("blush", "526493011924877325"); 

ePost ("blush2", "526492717480542208"); 

ePost ("hawt", "526492809289662465"); 
ePost ("hot", "526492809289662465"); 

ePost ("omw", "526492758119022603"); 
ePost ("on my way", "526492758119022603"); 

ePost ("cry", "526493060826136577"); 

ePost ("ping", "526493090177875968"); 

ePost ("peek", "526492978513051651"); 

ePost ("sans", "526492925211967498"); 

// *** IMAGES ***
post ("oh worm", "png");

post ("objection", "png"); 

post ("counter", "png");

post ("thirst", "gif");

post ("hello!", "gif");
post ("welcome!", "gif");

post ("go to sleep", "png");

iPost ("weeaboo slayer", "png");

iPost ("roundbear", "png");

iPost ("dancing all night", "gif");

iPost ("quiet!", "png");

iPost ("delicious pancakes", "png");

iPost ("im rooting for you", "gif");
iPost ("i'm rooting for you", "gif");

iPost ("i keep screaming", "png");

iPost ("hold it!", "png");

iPost ("delete this", "png");

iPost ("ok!", "png");

// VIDEOS
vPost ("vindication", "https://goo.gl/RuYCAU");

// ACTION / @ MESSAGES
if ((msg.includes (prefix + "cuddle ") || msg.includes (prefix + "hug ")) && mention != null) {
    // USES MY RANDOM IMAGES V2 VIDEO TO SEND CUDDLE IMAGES
}

// RANDOM DOG
if (msg.includes(prefix + "pupper") || msg.includes(prefix + "doggo") || msg.includes(prefix + "doggy") || msg.includes(prefix + "dog") || msg.includes(prefix + "puppy")) {
    // USES MY RANDOM IMAGES V2 VIDEO TO SEND DOG IMAGES
}

// FUZZSONA
// SUMMONS A PERSONA; NOT A FUZZSONA

} // End try statement
catch (err) {
    
}

}