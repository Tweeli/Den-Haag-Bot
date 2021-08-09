const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kanaal = "560844017336582144"
	var kanaal2 = "692811822809743380"
	
	if(message.channel.id !== kanaal || message.channel.id !== kanaal2) return message.lineReply('> Bot commands kunnen alleen uitgevoerd worden in <#560844017336582144>.');

    var trainingsRole = message.guild.roles.cache.get('702557041885052979');
    
    message.member.roles.remove(trainingsRole.id);

    return message.lineReply("De mention role is weggehaalt!")

}

module.exports.help = {
    name: "mentionremove",
    aliases: ["mentionroleremove"]
}