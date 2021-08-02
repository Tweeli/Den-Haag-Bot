const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming om dit te doen.")
 
    if (!args[0]) return message.lineReply("Geen gebruiker opgegeven.");
 
    var member = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));
    if (!member) return message.lineReply("Gebruiker niet gevonden.");
 
    var text = args.join(" ").slice(args[0].length + 1);
    if (!text) return message.lineReply("Geen bericht opgegeven.");
 
    member.send("Je hebt een bericht gekregen van "  + message.author.username +  ". Het bericht: "  + text).then(() => {
        message.lineReply("Bericht verzonden.");
    }).catch(() => {
        message.lineReply("Deze persoon heeft zijn privé berichten uitstaan.")
    });
 
}
 
module.exports.help = {
    name: "pm",
    aliases: ["dm"]
}