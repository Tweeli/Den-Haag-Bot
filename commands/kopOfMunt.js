const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var value = ["kop", "munt"];

    var result = value[Math.floor(Math.random() * value.length)];

    var komEmbed = new discord.MessageEmbed()
        .setDescription(`:coin: En het is geworden... ${result}!`)
        .setColor("#6aa75e")
        .setFooter('Created by Tweeli.#0001');
    message.lineReply(komEmbed)
}

module.exports.help = {
    name: "kom",
    aliases: ["kom", "kopofmunt"]
} 