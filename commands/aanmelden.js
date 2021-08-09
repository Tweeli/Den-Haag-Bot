const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kanaal = "560844017336582144"
	var kanaal2 = "692811822809743380"
	
	if(message.channel.id !== kanaal || message.channel.id !== kanaal2) return message.lineReply('> Bot commands kunnen alleen uitgevoerd worden in <#560844017336582144>.');

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