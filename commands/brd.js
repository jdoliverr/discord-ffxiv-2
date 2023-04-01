const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://etro.gg/gearset/2a242f9b-8a41-4d09-9e14-3c8fb08e97e4');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'brd'
};