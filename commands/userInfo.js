const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {

    var member = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));
    if(!member) member = message.member;

    var roles = member.roles.cache.size - 1;
    var roleNames = member.roles.cache.map(r => r).join(" ").replace("@everyone", "");
    if(roles == 0) roleNames = "Geen rollen.";

    var status = member.presence.status;

    var nickName = member.nickname;
    if(nickName == null || undefined) nickName = "Geen.";

    var userinfoEmbed = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, `${message.author.avatarURL({ size: 4096 })}`)
        .setColor("#6aa75e")
        .setDescription(`${message.author}`)
        .setThumbnail(member.user.displayAvatarURL({size: 4096}))
        .addField("ID", `${member.id}`, true)
        .addField("Bijnaam", nickName, true)
        .addField("Status", `${status}`, true)
        .addField("Game", `${member.presence.activities[0] ? member.presence.activities[0].name : 'Geen.'}`, true)
        .addField("Account gemaakt", `${moment(member.user.createdAt).format("LL")}`)
        .addField("Server gejoined", `${moment(member.joinedAt).format('LL')}`)
        .addField(`Rollen [${roles}]`, `${roleNames}`)
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

    message.reply(userinfoEmbed);
}

module.exports.help = {
    name: "userinfo",
    aliases: ["uinfo", "whois"]
}