const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.47(recommended): https://etro.gg/gearset/fb5976d5-a94c-4052-9092-3c3990fefa76');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'dnc'
};