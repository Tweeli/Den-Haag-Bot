const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.has('682635913431482471')) return message.reply('Jij kan dit niet');

    var afmelden = message.member.guild.channels.cache.get("666690472692940830");

    var afmeldRole = message.guild.roles.cache.get('873857897136783360');

    message.member.roles.remove(afmeldRole.id);

    afmelden.send(`${message.author}, u bent weer aangemeld!`);
    return message.reply("U bent succesvol aangemeld.")

}

module.exports.help = {
    name: "aanmelden",
    aliases: []
}