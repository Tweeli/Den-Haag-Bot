const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var value = ["kop", "munt"];

    var result = value[Math.floor(Math.random() * value.length)];

    var komEmbed = new discord.MessageEmbed()
        .setDescription(`:coin: En het is geworden... ${result}!`)
        .setColor("#6aa75e")
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
    message.reply({embeds: [komEmbed]})
}

module.exports.help = {
    name: "kom",
    aliases: ["kom", "kopofmunt"]
} 