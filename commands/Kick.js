discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

   
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet gebruiken!");
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("De bot heeft hiervoor geen perms!");
    
    if(!args[0]) return message.reply("Geen gebruiker opgegeven!");
    
    var kickUser = message.guild.member( message.mentions.users.first() || message.guild.members.get(args[1]));
    
    const kickChannel = message.guild.channels.cache.find(c => c.name == "「📃」user-logs")
    
    
    if(!args[1]) return message.reply("Geen redenen opgegeven")
    
  
    
    var reason = args.slice(1).join(" ");
    
    if(!kickUser) return message.reply("Gebruiker niet gevonden!");

    var embedPrompt = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .setDescription(`Wil je ${kickUser} kicken?`)
        .setFooter("Created by Tweeli.#0001");

    var embed = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Gekickt: ** ${kickUser} \n**Gekickt door:** ${message.author} \n**Reden: ** ${reason}`);

    message.channel.send(embedPrompt).then(async msg => {

    message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1}).then(collected => {

        if(collected.first().content.toLowerCase() == 'ja' || `yes`) {
            
        kickChannel.send(embed)
            kickUser.kick(reason).catch(err => {
            if (err) return message.channel.send(`Er is iets foutgegaan.`);
        });

        
        }else {
            message.reply("Geanuleerd")
        }
        message.channel.send(`${message.author} je hebt ${kickUser} succesvol gekicked!`)
    })
})
}

module.exports.help = {
    name: "kick",
    aliases: [] 
}
