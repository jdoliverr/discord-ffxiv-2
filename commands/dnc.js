const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://bit.ly/DNCBiS-7-05 \nhttps://discord.com/channels/277897135515762698/1254794317956907132');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'dnc'
};