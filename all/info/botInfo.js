const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botInfoEmbed = new discord.MessageEmbed()
            .setTitle('Den Haag Bot | BOT')
            .setColor("#6aa75e")
            .addField("Bot naam", "Den Haag Bot.")
            .addField("Bot ID", "868367264053858314")
            .addField("Gemaakt door", "Tweeli.#0001")
            .addField("Gemaakt op", "Visual Studio Code.")
            .addField("Node.js", "13.0.1")
            .addField("Platform", "MacOS")
            .addField("Laatst geüpdate", "10 Augustus 2021.")
            .addField("Gemaakt op", "15 Juni 2021")
            .setThumbnail('https://cdn.discordapp.com/attachments/755878713668796446/850431626608902204/image0.png')
            .setTimestamp()
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

            message.reply({embeds: [botInfoEmbed]});

}

module.exports.help = {
    name: "botinfo",
    aliases: ["binfo"]
}