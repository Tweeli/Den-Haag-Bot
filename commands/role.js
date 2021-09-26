const discord = require("discord.js");

module.exports = {
    /**
     * 
     * @param {discord.Message} message
     * @param {*} Member
     * @param {*} args
     */
    async execute(message, Member, args) {
        const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('DHS')
            .setLabel('Mention')
            .setStyle('SECONDARY'),
          new MessageButton()
            .setCustomId('SHD')
            .setLabel('Trainings role')
            .setStyle('SECONDARY')
        )
        const role_embed = new MessageEmbed()
            .setColor('#6aa75e')
            .setDescription('Gebruik de knoppen om je roles te krijgen!')

        message.channel.send({ embeds:  [roles_embed], components: [row] });

        const iFilter = i => i.user.id === message.author.id;

        const collector = await m.createMessageComponentCollector({ filter: iFilter, time: 60000 });

        collector.on('collect', async i => {
            if (i.customId === 'DHS'){
                const role = message.guild.roles.cache.get('702557041885052979');
                if (i.member.roles.cache?.has('702557041885052979')){
                    i.member.roles.remove('702557041885052979')
                    i.reply({ content: `Removed the ${role} role!`, ephemeral: true });
                } else {
                    i.member.roles.add('702557041885052979')
                    i.reply({ content: `Added the ${role} role!`, ephemeral: true });
                }
            } else if(i.customId === 'SHD'){
                const role = message.guild.roles.cache.get('757904431051440219');
                if (i.member.roles.cache?.has('757904431051440219')){
                    i.member.roles.remove('757904431051440219')
                    i.reply({ content: `Removed the ${role} role!`, ephemeral: true });
                } else {
                    i.member.roles.add('757904431051440219')
                    i.reply({ content: `Added the ${role} role!`, ephemeral: true });
                }
            }
        })
    }
}

module.exports.help = {
    name: "test",
    aliases: []
}