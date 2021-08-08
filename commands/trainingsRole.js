const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var trainingsRole = message.guild.roles.cache.get('873857897136783360');
    
    message.member.roles.add(trainingsRole.id);

    return message.lineReply("Je hebt de trainingsrole gekregen! | 📚")

}

module.exports.help = {
    name: "trainingsrole",
    aliases: ["trainingrole", "training-role", "trainings-role"]
}
