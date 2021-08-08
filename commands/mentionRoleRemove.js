const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var trainingsRole = message.guild.roles.cache.get('702557041885052979');
    
    message.member.roles.remove(trainingsRole.id);

    return message.lineReply("De mention role is weggehaalt!")

}

module.exports.help = {
    name: "mentionremove",
    aliases: ["mentionroleremove"]
}