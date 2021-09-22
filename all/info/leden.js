const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var ledenTotal = message.guild.memberCount;
    var bots = message.guild.members.cache.filter(m => m.user.bot).size;
    var people = ledenTotal - bots;

    var ledenEmbed = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .setDescription(`Leden | 👤: ${message.guild.memberCount - message.guild.members.cache.filter(m =>m.user.bot).size} \n Bots | 🤖: ${message.guild.members.cache.filter(m =>m.user.bot).size} \n Totaal aantal leden | 👥: ${message.guild.memberCount}`)
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

        message.reply({embeds: [ledenEmbed]});

}

module.exports.help = {
    name: "leden",
    description: "Geeft weer hoeveel leden er in de server zitten.",
    category: "Informatie",
    aliases: ["membercount", "members"]
}