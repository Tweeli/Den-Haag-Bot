const {
    Client,
    Message,
    MessageEmbed,
    MessageButton,
    MessageActionRow
} = require('discord.js');
const bot = require('../../index')

const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    /** 
     * @param {Client} bot 
     * @param {Message} message 
     * @param {String[]} args 
     */

        const embed = new MessageEmbed()
            .setColor('#6aa75e')
            .setDescription(
                "**How to make a ticket**\n" +


                "> Click on the reaction that relates to your need\n" +

                "> Once the ticket is made you will be able to type in there"

            )
            .setTitle('Tickets')


        const bt = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('tic')
                .setLabel('🎫 Create Ticket!')
                .setStyle('PRIMARY'),
            );

        message.channel.send({
            embeds: [embed],
            components: [bt]
        });
    }

    
module.exports.help = {
    name: "ticket-panel",
    aliases: []
}