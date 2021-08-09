const discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => { 

    var kanaal = "560844017336582144"
	var kanaal2 = "692811822809743380"
	
	if(message.channel.id !== kanaal || message.channel.id !== kanaal2) return message.lineReply('> Bot commands kunnen alleen uitgevoerd worden in <#560844017336582144>.');

    fetch('https://www.reddit.com/r/lookatmydog/random/.json').then(resp => resp.json()).then(respOmgevormd => {

        var permaLink = respOmgevormd[0].data.children[0].data.permaLink;
        var dogUrl = `https://www.reddit.com${permaLink}`;
        var dogFoto = respOmgevormd[0].data.children[0].data.url;
        var dogTitle = respOmgevormd[0].data.children[0].data.title;

        var memeEmbed = new discord.MessageEmbed()
            .setTitle(`${dogTitle}`)
            .setURL(`${dogUrl}`)
            .setImage(`${dogFoto}`)
            .setColor('#6aa75e')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
        message.lineReply(memeEmbed);

    }).catch("error", (err) => {
        console.log(err.message);
    })

}

module.exports.help = {
    name: "dog",
    aliases: ["hond"]
}