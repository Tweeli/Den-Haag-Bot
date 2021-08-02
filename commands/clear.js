const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming om dit de doen.").then(msg => msg.delete({ timeout: 3000 }));

    if (!args[0]) return message.reply("Geen aantal opgegeven.").then(msg => msg.delete({ timeout: 3000 }));

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("Je kan geen 0 berichten verwijderen.").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] == 1) {
                message.reply("Ik heb 1 bericht verwijderd.").then(msg => msg.delete({ timeout: 3000 }));
            } else {
                message.reply(`Ik heb ${args[0]} berichten verwijderd.`).then(msg => msg.delete({ timeout: 3000 }));
            }

        });

    } else {
        return message.lineReply("Geef een getal op.").then(msg => msg.delete({ timeout: 3000 }));
    }

}

module.exports.help = {
    name: "clear",
    aliases: []
}