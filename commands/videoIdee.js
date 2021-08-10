const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
    if (!args[0]) return message.reply("Geen video idee meegegeven.")
   
    var videoIdee = message.member.guild.channels.cache.get("752146763695259659");

    const suggestieEmbed = new discord.MessageEmbed()
        .setTitle(`Video idee van ${message.author.tag} !`)
        .setColor("#6aa75e")
        .setDescription("> Video idee: " + args.join(" "))
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

    var msg = await videoIdee.send(suggestieEmbed);
    
    await msg.react('✅')
    await msg.react('❌')
    
    

    return message.reply("Video idee seccesvol ingezonden!")

  
    message.delete({ timeout: 1000 });

}

module.exports.help = {
    name: "videoidee",
    aliases: ["vididee"]
}