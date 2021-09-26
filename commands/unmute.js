const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !tempmute persoon tijd (h,m,s).

    if (!message.member.roles.cache.has('682635913431482471')) return message.reply('Jij kan dit niet');

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var unmutePersoon = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));

    if (!unmutePersoon) return message.reply("Kan de gebruiker niet vinden.");

    if (unmutePersoon.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kunt deze gebruiker niet muten");

    var muteRole = message.guild.roles.cache.get('794678890429677620');
    if (!muteRole) return message.channel.send("De rol muted bestaat niet.");

    const muteChannel = message.guild.channels.cache.find(c => c.name == "「📃」user-logs");

     var muteEmbed = new discord.MessageEmbed()
      .setColor("#6aa75e")
      .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
      .setTimestamp()
      .setDescription(`**Geunmute: ** ${unmutePersoon} \n**Gemute door:** ${message.author}`);
      muteChannel.send({embeds: [muteEmbed]})


    unmutePersoon.roles.remove(muteRole.id);

    message.channel.send(`${unmutePersoon} is geunmute`);

  
}

module.exports.help = {
    name: "unmute",
    aliases: ["umute"]
}