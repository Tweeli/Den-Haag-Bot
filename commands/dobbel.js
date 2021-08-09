const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var kanaal = "560844017336582144"
	var kanaal2 = "692811822809743380"
	
	if(message.channel.id !== kanaal || message.channel.id !== kanaal2) return message.lineReply('> Bot commands kunnen alleen uitgevoerd worden in <#560844017336582144>.');

    var result = Math.ceil(Math.random() * 6);

    var dobbelEmbed = new discord.MessageEmbed()
     .setDescription(`:game_die: Je hebt **${result}** gegooid! :game_die:`)
     .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
    message.lineReply(dobbelEmbed)

}

module.exports.help = {
    name: "dobbel",
    description: "",
    category: "",
    aliases: ["dobbelsteen"]
}