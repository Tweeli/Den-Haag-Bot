const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const prefix = require("../botconfig.json")

    const firstValue = Number(args[0]);
    const secondValue = Number(args[2]);

    if (!args[0]) return message.reply(`You have to input more arguments \`!calc number [+, -, x, /] number\``);
    if (!firstValue) return message.reply("The first value stated is not a number.");
    if (!args[1]) return message.reply("You have to state what you want to do whit this and another number. Options: `+, -, x, /`");
    if (!['+', '-', 'x', '/'].includes(args[1])) return message.reply("You did not state a method to apply to these numbers: `+, -, x, /`");
    if (!secondValue) return message.reply("The second value stated is not a number.");

    if (args[1] == '+') {
        let result = firstValue + secondValue;
        message.reply(`${firstValue} + ${secondValue} = ${result}.`);
    }

    if (args[1] == '-') {
        let result = firstValue - secondValue;
        message.reply(`${firstValue} - ${secondValue} = ${result}.`);
    }

    if (args[1] == 'x') {
        let result = firstValue * secondValue;
        message.reply(`${firstValue} x ${secondValue} = ${result}.`);
    }

    if (args[1] == '/') {
        let result = firstValue / secondValue;
        message.reply(`${firstValue} / ${secondValue} = ${result}.`);
    }

}

module.exports.help = {
    name: "rekenmachine",
    aliases: ["calculator", "calculate", "calc"]
}