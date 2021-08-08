const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming om dit te doen.")

    var afmelden = message.member.guild.channels.cache.get("666690472692940830");

    var afmeldRole = message.guild.roles.cache.get('873857897136783360');

    message.member.roles.remove(afmeldRole.id);

    afmelden.send(`${message.author}, u bent weer aangemeld!`);
    return message.lineReply("U bent succesvol aangemeld.")

}

module.exports.help = {
    name: "aanmelden",
    aliases: []
}