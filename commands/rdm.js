const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.48: https://etro.gg/gearset/6d7a091d-52f5-49ec-9b2e-d7b1d4c45733');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'rdm'
};