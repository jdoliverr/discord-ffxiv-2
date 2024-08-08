const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://etro.gg/gearset/885a40b4-6ab2-4bf6-b479-b9f835e094bc \nhttps://discord.com/channels/277897135515762698/1255595081591947315');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'rpr'
};