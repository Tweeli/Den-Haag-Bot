const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {

    var roles = message.guild.roles.cache.size - 1;

    var serverinfoEmbed = new discord.MessageEmbed()
     .setColor("#6aa75e")
     .setThumbnail(`${message.guild.iconURL({ size: 4096 })}`)
     .setTitle(`${message.guild.name}`)
     .addField("ID:", `${message.guild.id}`)
     .addField("Founder:", `<@486559825984225283>`, true)
     .addField("Regio:", `${message.guild.region}`, true)
     .addField("Bots:", `${message.guild.members.cache.filter(m =>m.user.bot).size}`, true)
     .addField("Mensen:", `${message.guild.memberCount - message.guild.members.cache.filter(m =>m.user.bot).size}`, true)
     .addField("Totaal aantal leden:", message.guild.memberCount, true)
     .addField("Online:", `${message.guild.members.cache.filter(m =>m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size}`, true)
     .addField("Tekstkanalen:", `${message.guild.channels.cache.filter(chan => chan.type == "text").size}`, true)
     .addField("Spraakkanalen:", `${message.guild.channels.cache.filter(chan => chan.type == "voice").size}`, true)
     .addField("Gemaakt op:", `${moment(message.guild.createdAt).format('LL')}`)
     .addField("Je bent gejoined op:", `${moment(message.member.joinedAt).format('LL')}`)
     .addField(`Rollen:`, `Deze server telt **${roles} rollen**. Voor meer info over de rollen kunt u !rollen doen.`)
     .setFooter('Created by Tweeli.#0001');

     message.lineReply(serverinfoEmbed);




}  

module.exports.help = {
    name: "serverinfo",
    description: "",
    category: "",
    aliases: ["sinfo"]
}