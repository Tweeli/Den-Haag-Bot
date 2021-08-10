const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var pongEmbed = new discord.MessageEmbed()
    .setDescription("Pong: " + (message.createdTimestamp - Date.now()) + " ms")
    .setColor("#6aa75e")
    .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
   message.reply(pongEmbed)   


}

module.exports.help = {
    name: "ping",
    aliases: []
}