const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const quotes = require("../data/Quotes.json")

    if (message.author.bot) return;

    var num = Math.floor(Math.random()*quotes.Quotes.length)

    var quoteEmbed = new discord.MessageEmbed()
     .setDescription(quotes.Quotes[num].q + "\n- " + quotes.Quotes[num].a)
     .setColor("#6aa75e")
     .setFooter('Created by Tweeli.#0001');
    message.lineReply(quoteEmbed);

}

module.exports.help = {
    name: "quote",
    aliases: ["quotes"]
}