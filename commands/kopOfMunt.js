const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var kanaal = "560844017336582144"
	var kanaal2 = "692811822809743380"
	
	if(message.channel.id !== kanaal || message.channel.id !== kanaal2) return message.lineReply('> Bot commands kunnen alleen uitgevoerd worden in <#560844017336582144>.');

    var value = ["kop", "munt"];

    var result = value[Math.floor(Math.random() * value.length)];

    var komEmbed = new discord.MessageEmbed()
        .setDescription(`:coin: En het is geworden... ${result}!`)
        .setColor("#6aa75e")
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
    message.lineReply(komEmbed)
}

module.exports.help = {
    name: "kom",
    aliases: ["kom", "kopofmunt"]
} 