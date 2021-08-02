const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply("Gebruik sps <steen, papier, schaar>"); 

    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (args[0].toUpperCase() == "STEEN") {

        if (result == "papier") {

            return message.lineReply(`Ik heb ${result} :notepad_spiral:, Ik win.`);

        } else if (result == "schaar") {

            return message.lineReply(`Ik heb ${result} :scissors:, jij wint.`);
        } else if (result == "steen") {

            return message.lineReply(`Ik heb ${result} :moyai:, het is gelijkspel.`);

        }

    }
    else if (args[0].toUpperCase() == "PAPIER") {

        if (result == "schaar") {

            return message.lineReply(`Ik heb ${result} :scissors:, Ik win.`);

        } else if (result == "steen") {

            return message.lineReply(`Ik heb ${result} :moyai:, jij wint.`);
        } else if (result == "papier") {

            return message.lineReply(`Ik heb ${result} :notepad_spiral:, het is gelijkspel.`);

        }

    }
    else if (args[0].toUpperCase() == "SCHAAR") {

        if (result == "steen") {

            return message.lineReply(`Ik heb ${result} :moyai:, Ik win.`);

        } else if (result == "papier") {

            return message.lineReply(`Ik heb ${result} :notepad_spiral:, jij wint.`);
        } else if (result == "schaar") {

            return message.lineReply(`Ik heb ${result} :scissors:, het is gelijkspel.`);

        }

    }

}

module.exports.help = {
    name: "sps",
    aliases: ["bladsteenschaar", "schaarsteenpapier", "papiersteenschaar", "ssp"]
}