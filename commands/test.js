const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {

    var gementionedUser = message.guild.member( message.mentions.users.first() || message.guild.members.get(args[1]));
   
    console.log(gementionedUser);

}

module.exports.help = {
    name: "test",
    aliases: []
}