const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://etro.gg/gearset/f2426d1e-2da8-4151-bf52-74ca67b5f4a2 \nhttps://discord.com/channels/277897135515762698/592614693810733078');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'brd'
};