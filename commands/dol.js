const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://guides.ffxivteamcraft.com/guide/gathering-melding-guide \nhttps://discord.com/channels/277897135515762698/497930627774152714');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'dol'
};