const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://discord.com/channels/277897135515762698/582344575394512913');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'test'
};