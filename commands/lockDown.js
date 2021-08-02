const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.lineReply("Jij kan dit niet doen.");

    await message.channel.overwritePermissions([

        {
            id: message.guild.roles.cache.find(r => r.name == "@everyone").id,
            id: message.guild.roles.cache.find(r => r.name == "Moderator | HR (PROEF)").id,
            id: message.guild.roles.cache.find(r => r.name == "🟦 | Moderator | HR").id,
            id: message.guild.roles.cache.find(r => r.name == "🟩 | Administrator | HR").id,
            id: message.guild.roles.cache.find(r => r.name == "🟥 | Super Administrator | HC").id,
            id: message.guild.roles.cache.find(r => r.name == "🟪 | Hoofd Administrator|HC+").id,
            id: message.guild.roles.cache.find(r => r.name == "🟫 | Manager | TM").id,
            id: message.guild.roles.cache.find(r => r.name == "Bestuurs-Voorzitter").id,
            id: message.guild.roles.cache.find(r => r.name == "Gedelegeerd-Bestuurder | CEO").id,
            deny: ['SEND_MESSAGES']
        }

    ]);

    message.lineReply("Het kanaal is gelockt.");
    

}

module.exports.help = {
    name: "lock",
    aliases: ["lockdown"]
}