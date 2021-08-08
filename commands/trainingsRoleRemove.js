const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var trainingsRole = message.guild.roles.cache.get('757904431051440219');
    
    message.member.roles.remove(trainingsRole.id);

    return message.lineReply("Je hebt de trainingsrole gekregen! | 📚")

}

module.exports.help = {
    name: "trainingsroledelete",
    aliases: ["trainingsdelete", "trainingsrole-remove", "trainingsroleremove"]
}