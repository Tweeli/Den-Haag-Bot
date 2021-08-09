const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	
    if(!message.channel.id == "560844017336582144") return message.lineReply('Bot commands kunnen alleen in <#560844017336582144> uitgevoerdz');



    if (!args[2]) return message.reply("Stel hier je volledige vraag");
    let antwoorden = ["Ja", "Nee", "Misschien", "Misschien niet", "Waarschijnlijk wel"];

    let resultaat = Math.floor((Math.random() * antwoorden.length));
    let vraag = args.slice(0).join(" ");

    let eightBallEmbed = new Discord.MessageEmbed()
    .setTitle(`8ball vraag van ${message.author.username}`)
    .setDescription("Lees hier de vraag van de 8ball")
    .setThumbnail("https://magic-8ball.com/assets/images/Our_magic_8_ball.png")
   .addFields([
       {name: "Vraag", value: `${vraag}`},
       {name: "Antwoord", value: `${antwoorden[resultaat]}`},
   ])
   .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
   .setTimestamp()

   message.lineReply(eightBallEmbed);

}


module.exports.help = {
    name: "8ball",
    aliases: ["vraag"]
}