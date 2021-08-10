const discord = require('discord.js');
const fetch = require("node-fetch")
const botConfig = require('./botconfig.json');
const levelFile = require('./data/levels.json')
const fs = require('fs');

//client.
const bot = new discord.Client({
	partails: ['MESSAGE', 'CHANNEL', 'REACTION']
});

//Command handler
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

//Command Handler.
fs.readdir('./commands/', (err, files) => {
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


//Bot Status/Slash Commands.
bot.on('ready', async () => {
	console.log(`${bot.user.username} Is online!`);

	bot.user.setActivity('Tweeli.#0001.', { type: 'LISTENING' });

	bot.api.applications(bot.user.id).guilds('493866072072650762').commands.post({
		data: {
			name: "test",
			description: "Geeft een antwoord"
		}
	})

	bot.api.applications(bot.user.id).guilds('493866072072650762').commands.post({
		data: {
			name: "dog",
			description: "Geeft een antwoord"
		}
	})

	bot.api.applications(bot.user.id).guilds('493866072072650762').commands.post({
		data: {
			name: "commands",
			description: "Geeft alle commands weer"
		}
	})

	bot.api.applications(bot.user.id).guilds('493866072072650762').commands.post({
		data: {
			name: "staffcommands",
			description: "Geeft alle staff commands weer"
		}
	})

	bot.api.applications(bot.user.id).guilds('493866072072650762').commands.post({
		data: {
			name: "meme",
			description: "Geeft een random meme weer"
		}
	})

	bot.api.applications(bot.user.id).guilds('493866072072650762').commands.post({
		data: {
			name: "solli-vragen",
			description: "Geeft een random meme weer"
		}
	})


	bot.api.applications(bot.user.id).guilds('493866072072650762').commands.post({
		data: {
			name: "say",
			description: "Geeft jou eigen antwoord terug",

			options: [
				{
					name: 'inhoud',
					description: 'inhoud van je bericht',
					type: 3,
					require: true
				}
			]
		}
	})

	bot.api.applications(bot.user.id).guilds('493866072072650762').commands.post({
		data: {
			name: "avatar",
			description: "Geeft de avatar weer van de persoon die je hebt meegegeven",

			options: [
				{
					name: 'persoon',
					description: 'de persoon waarvan je de avatar van wilt',
					type: 6,
					require: true
				}
			]
		}
	});

	bot.ws.on('INTERACTION_CREATE', async interactie => {

		const args = interactie.data.options;
		const command = interactie.data.name.toLocaleLowerCase();

		if (command == 'test') {
			bot.api.interactions(interactie.id, interactie.token).callback.post({
				data: {
					type: 4,
					data: {
						content: "Hoi, dit is een bericht."
					}
				}
			})
		}

		if (command == "say") {
			// [{name: 'inhoud', value: "tekst meegeeft"}]

			const beschrijving = args.find(args => args.name.toLocaleLowerCase() == 'inhoud').value;

			const tekstEmbed = new discord.MessageEmbed()
				.setDescription(beschrijving)
				.setColor('#6aa75e')

			bot.api.interactions(interactie.id, interactie.token).callback.post({
				data: {
					type: 4,
					data: await createAPIMesage(interactie, tekstEmbed)
				}
			})


		}

		if (command == "solli-vragen") {
			// [{name: 'inhoud', value: "tekst meegeeft"}]

			var solliVragenEmbed = new discord.MessageEmbed()
				.setTitle('Solicitatie vragen.')
				.setDescription('> 1. Wat is uw roblox naam? \n> 2. Wat is uw discord naam? \n> 3. Hoe oud ben je? \n> 4. Wat is uw motivatie voor staff? \n> 5. Hoe Vaak bent u online? *(cijfer 1 tot 10)* \n> 6. Wat wilt u verbeteren? \n> 7. Wat zijn uw + punten? \n> 8. Wat zijn uw - Punten? \n> 9. Wat doet u als u ziet dat een staff scheld/mensen kickt uit het niets? \n> 10. Wat doet u als er een ruzie is tussen 2 mensen of meer? \n> 11. Wat doet u als een Lid niet helemaal lekker in zijn vel zit? \n> 12. Wat doet u als een Lid in een verkeerde channel praat?  \n> 13. Wat doe je als iemand met  erge ziektes scheld? \n> 14. Wat doe je als iemand je training verstoord of van een ander? \n> 15. Wat doe je als je vriend een regel overtreedt? \n> 16. Kan je goed werken in een team verband? \n> 17. Wat is AA? \n> 18. Wat doe je als een HR aan AA doet? \n> 19. Wat doe je als een HC aan AA doet? \n> 20. Wat vind u belangrijk? \n> 21. Zijn er nog dingen die wij moeten weten? *(als u het niet wilt zeg dan: jullie hoeven het niet te weten)* \n> 22: Hoe ziet uw training eruit? *(minimaal 50 woorden)* \n> 23. Waarom moeten we u aannemen? \n> 24. Noem een willekeurig begrip op en wat het betekent? *(van uw dienst)* \n> 25. Wat is de functie van uw dienst? \n> 26. Maak een leuke afsluiting.')
				.setFooter('Veel succes!')
				.setColor('#6aa75e')

			bot.api.interactions(interactie.id, interactie.token).callback.post({
				data: {
					type: 4,
					data: await createAPIMesage(interactie, solliVragenEmbed)
				}
			})


		}

		if (command == "avatar") {
			// [{name: 'inhoud', value: "tekst meegeeft"}]

			var avatarEmbed = new discord.MessageEmbed()
				.setTitle(`Profielfoto van`)
				.setImage(interactie.user.displayAvatarURL({ dynamic: true, size: 4096 }))
				.setColor("#6aa75e")
				.setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

			bot.api.interactions(interactie.id, interactie.token).callback.post({
				data: {
					type: 4,
					data: await createAPIMesage(interactie, avatarEmbed)
				}
			})


		}

		if (command == "commands") {
			// [{name: 'inhoud', value: "tekst meegeeft"}]

			var commandsEmbed = new discord.MessageEmbed()
			.setTitle("Den Haag Bot. Commands:")
			.setDescription("> !8ball - Geeft een random antwoord. \n > !avatar - Geeft de profielfoto weer van de gebruiker die je hebt opgegeven. \n > !botinfo - Geeft info weer over de bot. \n > !sps: \n >  • Papier.  \n > • Schaar.  \n > • Steen.  \n > !bug - Met deze command kan je een bug megeven.  \n > !commands - Geeft alle commands weer.  \n > !hallo - Zegt iets terug.  \n > !invite - Geeft alle Discord Servers weer van Den Haag Stad.  \n > !kom - Kop of Munt.  \n > !leden - Geeft het aantal leden weer dat er op die moment in de server zitten.  \n > !level - Geeft jou level weer.  \n > !ping - Geeft weer hoeveel ping je hebt.  \n > !rollen - Geeft alle rollen weer. \n > !serverinfo - Geeft info weer over de server. \n > !suggestie - Vraag met deze command een suggestie aan. \n > !new - Maak met deze command een ticket aan. \n > !userinfo - Geeft info weer over de gebruiker die je hebt meegegeven.")
			.setColor("#6aa75e")
			.setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')

			bot.api.interactions(interactie.id, interactie.token).callback.post({
				data: {
					type: 4,
					data: await createAPIMesage(interactie, commandsEmbed)
				}
			})
		}

		if (command == "staffcommands") {
			// [{name: 'inhoud', value: "tekst meegeeft"}]^mù

			var staffCommandsEmbed = new discord.MessageEmbed()
				.setTitle("Den Haag Bot Staff Commands:")
				.setDescription("> !aanmelden - Je meld je weer aan. \n > !afmelden - Je meld je af. \n > !ban - Je bant de opgegeven gebruiker van de server.\n > !clear - Je delete het aantal berichten dat je hebt opgegeven. \n > !kick - Je kickt de opgegeven gebruiker van de server. \n > !mute - Mute de gebruiker voor zolang dat jij opgegeven hebt. > !pm - De bot dm't de gebruiker met het bericht dat jij opgegeven hebt. \n > !remove - Verwijderd de gebruiker uit een ticket. > !say - De bot zegt in dezelfde chat het bericht dat jij hebt meegegeven. \n > !staff-commands - Geeft alle commands weer die staff-members meer kunnen uitvoeren dan spelers. \n > !staff-suggestie - Met deze command vraag je een staff-suggestie aan. \n > !close - closed een ticket. \n > !warn - Je warnd de gebruiker die je hebt opgegeven.")
				.setColor("#6aa75e")
				.setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')

			bot.api.interactions(interactie.id, interactie.token).callback.post({
				data: {
					type: 4,
					data: await createAPIMesage(interactie, staffCommandsEmbed)
				}
			})
		}
	});
});

// Slash commands.
async function createAPIMesage(interactie, content) {

	var apiMessage = await discord.APIMessage.create(bot.channels.resolve(interactie.channel_id), content)
		.resolveData()
		.resolveFiles();

	return { ...apiMessage.data };

}

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

	bot.channels.cache.get('871799202055868477').send(deletedContentEmbed);


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
	bot.channels.cache.get('871799202055868477').send(newMessageEmbed);

})


//Scheldwoorden/bot.
bot.on('message', async message => {

	if (message.author.bot) return;

	if (message.channel.type === "dm") return message.lineReply("Bot commands kunnen niet in dm uitgevoerd worden.")

	var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"))



	var msg = message.content.toLocaleLowerCase();

	for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

		if (msg.includes(swearWords["vloekwoorden"][i])) {
			if (message.member.hasPermission("MANAGE_MESSAGES")) return

			message.delete();

			return message.reply("Gelieve niet te schelden.").then(msg => msg.delete({ timeout: 3000 }))
		}

	}

	var prefix = botConfig.prefix;

	var messageArray = message.content.split(' ');

	var command = messageArray[0];

	if (!message.content.startsWith(prefix)) return;

	var arguments = messageArray.slice(1);

	var commands = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)));

	if (commands) commands.run(bot, message, arguments);
});


bot.login(process.env.token);