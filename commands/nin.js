const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://etro.gg/gearset/b9876a4d-aba9-48f0-9c03-cb542af46a29');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'nin'
};