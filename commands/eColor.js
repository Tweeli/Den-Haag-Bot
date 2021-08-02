const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {



    var inviteEmbed = new discord.MessageEmbed()
     .setTitle("Embed color.")
     .setDescription("HEX: #6aa75e")
     .setColor("#6aa75e")
     .setFooter('Created by Tweeli.#0001');
    message.lineReply(inviteEmbed);

}

module.exports.help = {
    name: "ecolor",
    description: "",
    category: "",
    aliases: []
}
