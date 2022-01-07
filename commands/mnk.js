const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://etro.gg/gearset/44bbd5d1-a7a8-49b5-a750-6d54a737dc31');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'mnk'
};