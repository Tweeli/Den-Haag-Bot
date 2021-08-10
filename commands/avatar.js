const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var member = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));
    if(!member) member = message.member;

    var avatarEmbed = new discord.MessageEmbed()
        .setTitle(`Profielfoto van ${member.user.tag}`)
        .setImage(member.user.displayAvatarURL({dynamic : true, size: 4096}))
        .setColor("#6aa75e")
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
    message.reply(avatarEmbed);

}

module.exports.help = {
    name: "avatar",
    aliases: ["av", "pf", "profielfoto", "pfp"]
}