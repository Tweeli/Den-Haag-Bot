const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    const categoryID = "855714062037549086";
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;

           return message.reply("Je hebt al een ticket aangemaakt");

            
        }

    });

    if (ticketBestaat) return;

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });
                    
                        var ticketEmbed = new discord.MessageEmbed()
                            .setDescription("Het ticket van <#" + `${createdChannel.id}` + "> is geopend.")
                            .setColor("#6aa75e")
                            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
                            message.reply({embeds: [ticketEmbed]})

                    createdChannel.send(`${message.author}, <@&682635913431482471>`);
                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hoi ${message.author.username}`)
                        .setDescription("Het support team komt er zo snel mogelijk aan! \n Zeg hier alvast je vraag.")
                        .setColor('#6aa75e')
                        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
          
       
                    settedParent.send({embeds: [embedParent]})
                       
                    var ticketLog = new discord.MessageEmbed()
                    .setTitle("Ticket, " + createdChannel.name)
                    .setDescription("Het ticket van " + createdChannel.name + " is geopend.")
                    .setColor("#6aa75e")
                    .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
                    var logChannel = message.guild.channels.cache.find(channel => channel.id === "864201987683385435")
                    if(!logChannel) return message.reply("Er is iets misgelopen 1.");
                    message.reply({embeds: [ticketLog]})
   
             

                    

                    

                }
            ).catch(err => {
                console.log(err)
                message.channel.send("Er is iets misgelopen 2.");
            });
        }
    ).catch(err => {
        console.log(err)
        message.channel.send("Er is iets misgelopen 3.");
    });
} 

module.exports.help = {
    name: "new",
    aliases: ["ticket"]
}
