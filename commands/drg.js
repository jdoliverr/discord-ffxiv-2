const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.5 https://etro.gg/gearset/de153cb0-05e7-4f23-a924-1fc28c7ae8db \n2.46 https://etro.gg/gearset/d723087d-3d5b-4c77-9b59-f925c15d294c');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'drg'
};