const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kanaal = "560844017336582144"
	var kanaal2 = "692811822809743380"
	
	if(message.channel.id !== kanaal || message.channel.id !== kanaal2) return message.lineReply('> Bot commands kunnen alleen uitgevoerd worden in <#560844017336582144>.');

    let antwoorden = ["Hoi.", "Hoi!", "Hallo.", "Hallo!", "Hi.", "Hi!", "Hoi, hoe gaat het?", "Hoi, hoe gaat ie?"];
    let resultaat = Math.floor((Math.random() * antwoorden.length));

   message.lineReply(`${antwoorden[resultaat]}`)

}

module.exports.help = {
    name: "hallo",
    aliases: ["hoi", "Hoi!", "Hallo", "Hi", "hi!", "Hi!", "Hi.", "hi."]
}