const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var pongEmbed = new discord.MessageEmbed()
    .setDescription("Pong: " + (message.createdTimestamp - Date.now()) + " ms")
    .setColor("#6aa75e")
    .setFooter('Created by Tweeli.#0001');
   message.lineReply(pongEmbed)   


}

module.exports.help = {
    name: "ping",
    aliases: []
}