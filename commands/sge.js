const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('Tome ring: https://etro.gg/gearset/3c7d9741-0e74-41d7-9ec4-1b2e7c1673a5 \nCrafted Ring: https://etro.gg/gearset/32c72ae2-3c53-49cf-ac02-b989c693d8b5');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sge'
};