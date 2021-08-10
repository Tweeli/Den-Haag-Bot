const discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {

     var roles = message.guild.roles.cache.size - 1

    var rolesEmbed = new discord.MessageEmbed()
    .setTitle('Rollen Den Haag Stad.')
    .setDescription(`Rollen: [${roles}] ${message.guild.roles.cache.map(r => r).join(" ").replace("@everyone", "")}`)
    .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
         
  message.reply(rolesEmbed)

}

module.exports.help = {
    name: "rollen",
    aliases: ["roles"]
}