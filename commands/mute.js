const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    // !tempmute persoon tijd (h,m,s).

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Geen tijd opgegeven.");

    if (!args[2]) return message.reply("Geen reden opgegeven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!mutePerson) return message.reply("Kan de gebruiker niet vinden.");

    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kunt deze gebruiker niet muten");

    var muteRole = message.guild.roles.cache.get('794678890429677620');
    if (!muteRole) return message.channel.send("De rol muted bestaat niet.");

    var muteTime = args[1];

    if (!muteTime) return message.channel.send("Geen tijd opgegeven");

    var tijd = args[1]
    var reden = args.slice(2).join(" ")

    await (mutePerson.roles.add(muteRole.id));
    message.channel.send(`${mutePerson} is gemuted voor ${muteTime}`);

    const muteChannel = message.guild.channels.cache.find(c => c.name == "「📃」user-logs");

    var muteEmbed = new discord.MessageEmbed()
      .setColor("#6aa75e")
      .setFooter(message.member.displayName)
      .setTimestamp()
      .setDescription(`**Gemute: ** ${mutePerson} \n**Gemute door:** ${message.author} \n**Reden: ** ${reden} \n**Tijd: ** ${tijd}`);
    muteChannel.send(muteEmbed);


    setTimeout(() => {

        mutePerson.roles.remove(muteRole.id);

        message.channel.send(`${mutePerson} is geunmute`);

       var muteEmbed = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Geumute: ** ${mutePerson} \n**Geunmute door:** Den Haag Bot \n**Reden: ** auto`);
       muteChannel.send(muteEmbed);

    }, ms(muteTime));

}

module.exports.help = {
    name: "mute",
    aliases: []
}