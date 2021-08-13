const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var result = Math.ceil(Math.random() * 6);

    var dobbelEmbed = new discord.MessageEmbed()
     .setDescription(`:game_die: Je hebt **${result}** gegooid! :game_die:`)
     .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
     message.reply({embeds: [dobbelEmbed]})

}

module.exports.help = {
    name: "dobbel",
    description: "",
    category: "",
    aliases: ["dobbelsteen"]
}