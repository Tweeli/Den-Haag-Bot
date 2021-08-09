const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var kanaal = "560844017336582144"
	var kanaal2 = "692811822809743380"
	
	if(message.channel.id !== kanaal || message.channel.id !== kanaal2) return message.lineReply('> Bot commands kunnen alleen uitgevoerd worden in <#560844017336582144>.');


    var inviteEmbed = new discord.MessageEmbed()
     .setTitle("Invites!")
     .setDescription('[TeamDJD YouTube Server.](https://discord.gg/VgejNANPrN) \n - \n [Koninklijke Landmacht Server.](https://discord.gg/s5DnaFZtEq) \n - \n [Koninklijke Marechaussee Server.](https://discord.gg/4fGDD7pagH) \n - \n [DSI Den Haag Stad Server.](https://discord.gg/NSdXwCxhK2) \n - \n [Sollicitatie Server Den Haag Stad.](https://discord.gg/NCHjWjZg96) \n - \n [ESS Den Haag Stad Server.](https://discord.gg/GcPMCrWaar) \n - \n [Politie Den Haag Stad Server.](https://discord.gg/8VUuEkvRe2)')
     .setColor("#6aa75e")
     .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
    message.lineReply(inviteEmbed);

}

module.exports.help = {
    name: "invites",
    aliases: ["invite"]
}