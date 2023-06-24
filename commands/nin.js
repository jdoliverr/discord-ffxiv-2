const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.12: https://etro.gg/gearset/6556da3a-4514-439e-b4f4-07e0ccc85e93 \nhttps://discord.com/channels/277897135515762698/582344539323498499');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'nin'
};