require('dotenv').config();
const Discord = require('discord.js')
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fs = require('fs');
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log('bot online');

    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);
        let jsFile = files.filter(f => f.split('.').pop() == 'js')

        if(jsFile.length == 0) {return console.log('Could not find any commands!')}

        jsFile.forEach(f => {
            let props = require(`./commands/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })
});

bot.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'GUILD_TEXT') return;
    let prefix = '!';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length);
    let args = MessageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    let commandsFile = bot.commands.get(cmd);
    if(commandsFile) {commandsFile.run(bot, message, args)}
})

bot.login(process.env.TOKEN);