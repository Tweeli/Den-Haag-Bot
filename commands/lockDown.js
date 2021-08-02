const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.lineReply("Jij kan dit niet doen.");

    await message.channel.overwritePermissions([

        {
            id: message.guild.cache.find(r => r.name == "@everyone").id,
            deny: ['SEND_MESSAGES']
        }

    ]);

    message.lineReply("Het kanaal is gelockt.");
    

}

module.exports.help = {
    name: "lock",
    aliases: ["lockdown"]
}