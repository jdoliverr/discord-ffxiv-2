const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.48: https://etro.gg/gearset/5f972eb8-c3cd-44da-aa73-0fa769957e5b');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'rdm'
};