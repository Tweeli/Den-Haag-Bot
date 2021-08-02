const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !tempmute persoon tijd (h,m,s).

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!mutePerson) return message.reply("Kan de gebruiker niet vinden.");

    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kunt deze gebruiker niet muten");

    var muteRole = message.guild.roles.cache.get('794678890429677620');
    if (!muteRole) return message.channel.send("De rol muted bestaat niet.");

    const muteChannel = message.guild.channels.cache.find(c => c.name == "「📃」user-logs");

     var muteEmbed = new discord.MessageEmbed()
      .setColor("#6aa75e")
      .setFooter(message.member.displayName)
      .setTimestamp()
      .setDescription(`**Geunmute: ** ${mutePerson} \n**Gemute door:** ${message.author}`);
     muteChannel.send(muteEmbed);


    mutePerson.roles.remove(muteRole.id);

    message.channel.send(`${mutePerson} is geunmute`);

  
}

module.exports.help = {
    name: "unmute",
    aliases: ["umute"]
}