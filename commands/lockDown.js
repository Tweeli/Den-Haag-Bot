const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MENTION_EVERYONE")) return message.lineReply("Jij kan dit niet doen.");

    await message.channel.overwritePermissions([

        {
            id: message.guild.cache.find(r => r.name == "@everyone").id,
            deny: ['SEND_MESSAGES']
        }

    ])

    message.lineReply("Het kanaal is in lockdown.")
    

}

module.exports.help = {
    name: "leden",
    description: "Geeft weer hoeveel leden er in de server zitten.",
    category: "Informatie",
    aliases: []
}