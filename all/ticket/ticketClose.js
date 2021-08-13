const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryID = "855714062037549086";

    if (!message.member.roles.cache.has('682635913431482471')) return message.reply('Jij kan dit niet');

    if (!args[0]) return message.reply("Geen reden meegegeven om het ticket te closen.")

    var reden = args.slice(0).join(" ")

    if (message.channel.parentID == categoryID) {

        message.channel.delete();

        // Create embed.
        var closeticketEmbed = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("Het ticket van " + message.channel.name + ` is gesloten door ${message.author} . \n \n **Reden: ** ${reden}`)
            .setColor("#6aa75e")
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

        // Channel voor logging
        var logChannel = message.guild.channels.cache.find(channel => channel.id === "868377923638411304");
        if (!logChannel) return message.reply("Kanaal bestaat niet");

        logChannel.send(closeticketEmbed);

    } else {

        message.reply("Gelieve dit command te doen bij een ticket.");

    }



}

module.exports.help = {
    name: "close",
    aliases: ["delete"]
}
