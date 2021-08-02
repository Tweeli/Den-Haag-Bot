const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var result = Math.ceil(Math.random() * 6);

    message.lineReply(`:game_die: Je hebt **${result}** gegooid! :game_die:`);

}

module.exports.help = {
    name: "dobbel",
    description: "",
    category: "",
    aliases: ["dobbelsteen"]
}