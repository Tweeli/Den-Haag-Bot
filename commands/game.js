const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var gameEmbed = new discord.MessageEmbed()
     .setDescription('[Game link.](https://www.roblox.com/games/5747514148/Opening-Den-Haag-Stad-V1?refPageId=feee4627-61c1-41cd-a97d-9296b8962057) \n - \n [Gemeente groep.](https://www.roblox.com/groups/8158231/Gemeente-Den-Haag-Stad#!/about) \n - \n [Politie groep.](https://www.roblox.com/groups/6758586/Politie-I-Den-Haag-stad#!/about) \n - \n [Brandweer groep.](https://www.roblox.com/groups/7506165/Brandweer-I-Den-Haag-Stad#!/about) \n - \n [Ambulance groep.](https://www.roblox.com/groups/7506132/Ambulance-I-Den-Haag-Stad#!/about) \n - \n [ESS groep.](https://www.roblox.com/groups/7810548/Securitas-I-Den-Haag-Stad#!/about) \n - \n [Verkeerspolitie groep.](https://www.roblox.com/groups/8230930/Dienst-Infrastructuur) \n - \n [Koninklijke Marechaussee groep.](https://www.roblox.com/groups/7506220/Koninklijke-Marechaussee-I-Den-Haag-Stad#!/about) \n - \n [Dienst Speciale Interventies groep.](https://www.roblox.com/groups/6962086/Dienst-Speciale-Interventies-I-Den-Haag-stad#!/about) \n - \n [Rijkswaterstaat groep.](https://www.roblox.com/groups/8114337/Rijkswaterstaat-den-haag#!/about)')
     .setColor('#6aa75e')
     .setTimestamp()
     .setFooter('Created by Tweeli.#0001');
     message.lineReply(gameEmbed);

}

module.exports.help = {
    name: "game",
    aliases: ["game-link", "groups", "groeps", "groepen"]
}
