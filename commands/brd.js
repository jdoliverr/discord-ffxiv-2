const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://etro.gg/gearset/e3a5efdc-adee-4985-b91a-bf28f56933d0 \nhttps://discord.com/channels/277897135515762698/1255175056095711292');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'brd'
};