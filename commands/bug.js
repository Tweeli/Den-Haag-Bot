const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kanaal = "560844017336582144"
	var kanaal2 = "692811822809743380"
	
	if(message.channel.id !== kanaal || message.channel.id !== kanaal2) return message.lineReply('> Bot commands kunnen alleen uitgevoerd worden in <#560844017336582144>.');

    if (!args[0]) return message.reply("Geen bug meegegeven.")
    var suggestions = message.member.guild.channels.cache.get("752146535529185311");

    const suggestieEmbed = new discord.MessageEmbed()
        .setTitle(`Bug ingezonden door ${message.author.tag} !`)
        .setColor("#6aa75e")
        .setDescription("> Bug: " + args.join(" "))
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

    var msg = await suggestions.send(suggestieEmbed);

    return message.lineReply("Bug seccesvol ingezonden!");

    message.delete({ timeout: 1000 });

}

module.exports.help = {
    name: "bug",
    aliases: []
}