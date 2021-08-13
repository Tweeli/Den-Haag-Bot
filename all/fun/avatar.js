const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const avMember = message.mentions.users.first() || message.author;
    

    var avatarEmbed = new discord.MessageEmbed()
        .setAuthor(`${avMember.tag}`, `${avMember.displayAvatarURL({dynamic : true, size: 4096})}`)
        .setImage(avMember.displayAvatarURL({dynamic : true, size: 4096}))
        .setColor("#6aa75e")
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
        message.reply({embeds: [avatarEmbed]})

}

module.exports.help = {
    name: "avatar",
    aliases: ["av", "pf", "profielfoto", "pfp"]
}