const discord = require("discord.js");
const fs = require('fs')
const canvaCord = require("canvacord")

module.exports.run = async (bot, message, args) => { 

    const levelFile = JSON.parse(fs.readFileSync("./data/levels.json"));

    
    const member = message.member.id;


     var nextLevelXp = levelFile[member].level * 300;

     if (nextLevelXp === 0) nextLevelXp = 100;

     if (levelFile[member]){

      const rank = new canvaCord.Rank()
       .setAvatar(message.author.displayAvatarURL({dynamic: false, format: 'png'}))
       .setCurrentXP(levelFile[member].xp)
       .setLevel(levelFile[member].level)
       .setRequiredXP(nextLevelXp)
       .setStatus(message.author.presence.status)
       .setProgressBar("#6aa75e", 'COLOR')
       .setUsername(message.author.username)
       .setDiscriminator(message.author.discriminator)

      rank.build().then(data => {
        const attachment = new discord.MessageAttachment(data, "Rank.png");
        message.lineReply(attachment)
      })

     }else {
       message.lineReply("We hebben nog geen gegevens.")
     }

}

module.exports.help = {
    name: "level",
    aliases: ["rank"]
}