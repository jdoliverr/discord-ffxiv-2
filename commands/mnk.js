const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('1.94: https://i.imgur.com/LDglO37.png \n1.93: https://i.imgur.com/aqhWbOc.png');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'mnk'
};