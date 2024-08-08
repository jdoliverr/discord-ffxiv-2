const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50: https://etro.gg/gearset/c7206baa-68fc-4f52-a8ae-b1a3abfed92f \nhttps://etro.gg/gearset/c7206baa-68fc-4f52-a8ae-b1a3abfed92f \nhttps://discord.com/channels/277897135515762698/1255177344730140783');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'mch'
};