const linereply = require('discord-reply');
const discord = require('discord.js');
const fetch = require("node-fetch")
const botConfig = require('./botconfig.json');
const levelFile = require('./data/levels.json')
const fs = require('fs');

//client//
const bot = new discord.Client({
	partails: ['MESSAGE', 'CHANNEL', 'REACTION']
});

//Command handler
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

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

bot.on('ready', async () => {
	console.log(`${bot.user.username} Is online!`);

	bot.user.setActivity('Tweeli.#0001.', { type: 'LISTENING' });
});

bot.on('message', async message => {
	
  if (message.author.bot) return;

  if (message.channel.type === "dm") return message.lineReply("Bot commands kunnen niet in dm uitgevoerd worden.")

  var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"))

  

	var msg = message.content.toLocaleLowerCase();

  for (let i =0; i < swearWords["vloekwoorden"].length; i++) {

    if (msg.includes(swearWords["vloekwoorden"][i])) {
		if (message.member.hasPermission("MANAGE_MESSAGES")) return

      message.delete();

      return message.reply("Gelieve niet te schelden.").then(msg => msg.delete({ timeout: 3000 }))
    }

  }

	var prefix = botConfig.prefix;

	var messageArray = message.content.split(' ');

	var command = messageArray[0];

  RandomXp(message)

	if (!message.content.startsWith(prefix)) return;

	var arguments = messageArray.slice(1);

	var commands = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)));

	if (commands) commands.run(bot, message, arguments);
});


function RandomXp(message) {

  var randomNumber = Math.floor(Math.random() * 15) + 1;

  var idUser = message.author.id

  if (!levelFile[idUser]) {
    levelFile[idUser] = {
      xp: 0,
      level: 0
    }
  }



 levelFile[idUser].xp += randomNumber

 var levelUser = levelFile[idUser].level;
 var xpUser = levelFile[idUser].xp;

 var nextLevelXp = levelUser * 300;

 if (nextLevelXp === 0) nextLevelXp = 100;

 if (xpUser >= nextLevelXp){

  levelFile[idUser].level += 1;

  fs.writeFile("./data/levels.json", JSON.stringify(levelFile), err =>{
    if(err) console.log(err)
  });

 var levelEmbedSend = message.member.guild.channels.cache.get("661970226551717959");

 var levelEmbed = new discord.MessageEmbed()
    .setDescription(`** <@${idUser}> is een level hoger!**`)
    .setColor("#6aa75e")
    .addField("Nieuw level:", levelFile[idUser].level)
 levelEmbedSend.send(levelEmbed)

}

}


	

bot.login(process.env.token);