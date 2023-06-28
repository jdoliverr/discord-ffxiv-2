const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50: https://etro.gg/gearset/3a2d77ff-57e1-434d-b1da-72a7d4f44944 \nhttps://discord.com/channels/277897135515762698/580300460179718146');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'pld'
};