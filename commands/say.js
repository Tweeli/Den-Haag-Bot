const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming om dit te doen.");
var reason = args.slice(0).join(" ");

    message.delete();
    return message.channel.send(reason);


}

module.exports.help = {
    name: "say",
    aliases: ["zeg"]
}