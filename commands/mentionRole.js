const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var trainingsRole = message.guild.roles.cache.get('702557041885052979');
    
    message.member.roles.add(trainingsRole.id);

    return message.reply("Je hebt de mention role gekregen!")

}

module.exports.help = {
    name: "mention",
    aliases: ["mention-role"]
}