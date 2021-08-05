const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const quotes = require("../data/Quotes.json")

    if (message.author.bot) return;

    var num = Math.floor(Math.random()*quotes.Quotes.length)

    var quoteEmbed = new discord.MessageEmbed()
     .setDescription(quotes.Quotes[num].q + "\n- " + quotes.Quotes[num].a)
     .setColor("#6aa75e")
     .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
    message.lineReply(quoteEmbed);

}

module.exports.help = {
    name: "quote",
    aliases: ["quotes"]
}