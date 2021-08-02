const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let antwoorden = ["Hoi.", "Hoi!", "Hallo.", "Hallo!", "Hi.", "Hi!"];
    let resultaat = Math.floor((Math.random() * antwoorden.length));

   message.lineReply(`${antwoorden[resultaat]}`)

}

module.exports.help = {
    name: "hallo",
    aliases: ["hoi", "Hoi!", "Hallo", "Hi", "hi!", "Hi!", "Hi.", "hi."]
}