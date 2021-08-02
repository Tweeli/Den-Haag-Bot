const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply("Geen suggestie meegegeven.")
    var suggestions = message.member.guild.channels.cache.get("752146535722254432");

    const suggestieEmbed = new discord.MessageEmbed()
        .setTitle(`Suggestie van ${message.author.tag} !`)
        .setColor("#6aa75e")
        .setDescription("> Suggestie: " + args.join(" "))
        .setFooter('Created by Tweeli.#0001');

    var msg = await suggestions.send(suggestieEmbed);
    
    await msg.react('✅')
    await msg.react('❌')
    
    

    return message.lineReply("Suggestie seccesvol ingezonden!")

  
    message.delete({ timeout: 1000 });

}

module.exports.help = {
    name: "suggestie",
    aliases: ["suggest"]
}