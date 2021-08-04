const discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => { 

    fetch('https://www.reddit.com/r/lookatmydog/random/.json').then(resp => resp.json()).then(respOmgevormd => {

        var permaLink = respOmgevormd[0].data.children[0].data.permaLink;
        var dogUrl = `https://www.reddit.com${permaLink}`;
        var dogFoto = respOmgevormd[0].data.children[0].data.url;
        var dogTitle = respOmgevormd[0].data.children[0].data.title;

        var memeEmbed = new discord.MessageEmbed()
            .setTitle(`${dogTitle}`)
            .setURL(`${dogUrl}`)
            .setImage(`${dogFoto}`)
            .setColor('#6aa75e');
        message.lineReply(memeEmbed);

    }).catch("error", (err) => {
        console.log(err.message);
    })

}

module.exports.help = {
    name: "dog",
    aliases: ["hond"]
}