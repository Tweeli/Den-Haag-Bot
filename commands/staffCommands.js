const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming om dit te doen.")


     var staffCommandsEmbed = new discord.MessageEmbed()
      .setTitle("Den Haag Bot Staff Commands:")
      .setDescription("> !aanmelden - Je meld je weer aan. \n > !afmelden - Je meld je af. \n > !ban - Je bant de opgegeven gebruiker van de server.\n > !clear - Je delete het aantal berichten dat je hebt opgegeven. \n > !kick - Je kickt de opgegeven gebruiker van de server. \n > !mute - Mute de gebruiker voor zolang dat jij opgegeven hebt. > !pm - De bot dm't de gebruiker met het bericht dat jij opgegeven hebt. \n > !remove - Verwijderd de gebruiker uit een ticket. > !say - De bot zegt in dezelfde chat het bericht dat jij hebt meegegeven. \n > !staff-commands - Geeft alle commands weer die staff-members meer kunnen uitvoeren dan spelers. \n > !staff-suggestie - Met deze command vraag je een staff-suggestie aan. \n > !close - closed een ticket. \n > !warn - Je warnd de gebruiker die je hebt opgegeven.")
      .setColor("#6aa75e")
      .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
     message.lineReply(staffCommandsEmbed)   


}

module.exports.help = {
    name: "staff-commands",
    aliases: ["scommands"]
}