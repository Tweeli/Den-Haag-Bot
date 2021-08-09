const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kanaal = "560844017336582144"
	var kanaal2 = "692811822809743380"
	
	if(message.channel.id !== kanaal || message.channel.id !== kanaal2) return message.lineReply('> Bot commands kunnen alleen uitgevoerd worden in <#560844017336582144>.');

    var ledenTotal = message.guild.memberCount;
    var bots = message.guild.members.cache.filter(m => m.user.bot).size;
    var people = ledenTotal - bots;
    var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;

    var ledenEmbed = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .addField("Leden | 👤", ledenTotal, true)
        .addField("Mensen | 👤", `${message.guild.memberCount - message.guild.members.cache.filter(m =>m.user.bot).size}`, true)
        .addField("Bots | 🤖", `${message.guild.members.cache.filter(m =>m.user.bot).size}`, true)
        .addField("Totaal aantal leden | 👥", message.guild.memberCount, true)
        .addField("Online | 🟢", `${message.guild.members.cache.filter(m =>m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size}`, true)
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

    message.lineReply(ledenEmbed);

}

module.exports.help = {
    name: "leden",
    description: "Geeft weer hoeveel leden er in de server zitten.",
    category: "Informatie",
    aliases: ["membercount", "members"]
}