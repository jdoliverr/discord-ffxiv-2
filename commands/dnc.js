const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.49: https://etro.gg/gearset/50746158-5be1-4972-82f4-84a577f4bcce \nhttps://discord.com/channels/277897135515762698/593765592314413076');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'dnc'
};