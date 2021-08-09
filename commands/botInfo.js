const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kanaal = "560844017336582144"
	var kanaal2 = "692811822809743380"
	
	if(message.channel.id !== kanaal || message.channel.id !== kanaal2) return message.lineReply('> Bot commands kunnen alleen uitgevoerd worden in <#560844017336582144>.');

    var botinfoEmbed = new discord.MessageEmbed()
            .setTitle('Den Haag Bot | BOT')
            .setColor("#6aa75e")
            .addField("Bot naam", "Den Haag Bot.")
            .addField("Bot ID", "868367264053858314")
            .addField("Gemaakt door", "Tweeli.#0001")
            .addField("Gemaakt op", "Visual Studio Code.")
            .addField("Node", "V13.14.0")
            .addField("Platform", "MacOS")
            .addField("Laatst geüpdate", "5 Augustus 2021.")
            .addField("Gemaakt op", "15 Juni 2021")
            .setThumbnail('https://cdn.discordapp.com/attachments/755878713668796446/850431626608902204/image0.png')
            .setTimestamp()
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

        return message.lineReply(botinfoEmbed);

}

module.exports.help = {
    name: "botinfo",
    aliases: ["binfo"]
}