const discord = require('discord.js');
const fetch = require("node-fetch")
const botConfig = require('./botconfig.json');
const levelFile = require('./data/levels.json')
const fs = require('fs');

//client.
const intents = new discord.Intents(32767);
const bot = new discord.Client({ intents });

//Command handler
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

//Command Handler.
fs.readdir('./commands', (err, files) => {
	if (err) console.log(err);

	var jsFiles = files.filter(f => f.split('.').pop() === 'js');

	if (jsFiles.length <= 0) {
		console.log('Kon geen files vinden.');
		return;
	}

	jsFiles.forEach((f, i) => {

		var fileGet = require(`./commands/${f}`);
		console.log(`De file ${f} is geladen.`);

		bot.commands.set(fileGet.help.name, fileGet);

		fileGet.help.aliases.forEach(alias => {
			bot.aliases.set(alias, fileGet.help.name);
		})
	});
});

//Welkom's bericht.
//bot.on("guildMemberAdd", member => {

//	var role = member.guild.roles.cache.get('566189282793095170');

//	if (!role) return;

//	member.roles.add(role);

//	var welkomEmbed = new discord.MessageEmbed()
//		.setTitle("Welkom!")
//		.setDescription(`Welkom in TeamDJD | Den Haag Stad V2 ${member} \n\nlees zeker even de <#790891625320546324> door!
//		Bij vragen kunt u altijd naar <#560844017336582144> gaan en !new typen om een ticket aan te maken!`)
//		.setColor('#6aa75e')
//      .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
//	bot.channels.cache.get('669284473711362088').send(welkomEmbed);


//});


//Bot Status
bot.on('ready', async () => {
	console.log(`${bot.user.username} Is online!`);

	bot.user.setActivity('Tristan#5000', { type: 'LISTENING' });
});


//Verwijderd bericht log.
bot.on("messageDelete", messageDeleted => {

	if (messageDeleted.author.bot) return;

	var content = messageDeleted.content;
	if (!content) content = "Geen tekst meegegeven.";

	var respone = `Bericht ${messageDeleted.id} is verwijderd uit ${messageDeleted.channel} \n **Bericht:** ${content}`;

	var deletedContentEmbed = new discord.MessageEmbed()
		.setAuthor(`${messageDeleted.author.tag} (${messageDeleted.author.id})`, `${messageDeleted.author.avatarURL({ size: 4096 })}`)
		.setDescription(respone)
		.setTimestamp()
		.setColor('#6aa75e')
		.setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

	bot.channels.cache.get('871799202055868477').send({embeds: [deletedContentEmbed]});


});


//Geëdit bericht log.
bot.on("messageUpdate", async (oldMessage, newMessage) => {

	if (newMessage.author.bot) return;

	if (oldMessage.content == newMessage.content) return;

	var newMessageEmbed = new discord.MessageEmbed()
		.setAuthor(`${newMessage.author.tag} (${newMessage.author.id})`, newMessage.author.avatarURL({ size: 4096 }))
		.setDescription(`Bericht ${newMessage.id} is bewerkt in ${newMessage.channel}\n **Voor:** ${oldMessage.content}\n **Na:** ${newMessage.content}`)
		.setColor('#6aa75e')
		.setTimestamp()
		.setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
	bot.channels.cache.get('871799202055868477').send({embeds: [newMessageEmbed]});

})


//Scheldwoorden/bot.
bot.on('messageCreate', async message => {

	if (message.author.bot) return;

	if (message.channel.type === "dm") return message.reply("Bot commands kunnen niet in dm uitgevoerd worden.");

	var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));



	var msg = message.content.toLocaleLowerCase();

	for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

		if (msg.includes(swearWords["vloekwoorden"][i])) {

			if (message.author.bot) return;
			if (!message.member.roles.cache.has('682635913431482471')) return;

			message.delete();
		}

	}

	var prefix = botConfig.prefix;

	var messageArray = message.content.split(' ');

	var command = messageArray[0];

	if (!message.content.startsWith(prefix)) return;

	var arguments = messageArray.slice(1);

	var commands = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)));
});


//bot.login(botConfig.token);
bot.login(process.env.token);
