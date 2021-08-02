const discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {

     var roles = message.guild.roles.cache.size - 1

    var rolesEmbed = new discord.MessageEmbed()
    .setTitle('Rollen Den Haag Stad.')
    .setDescription(`Rollen: [${roles}] ${message.guild.roles.cache.map(r => r).join(" ").replace("@everyone", "")}`)
         
  message.lineReply(rolesEmbed)

}

module.exports.help = {
    name: "rollen",
    aliases: ["roles"]
}