const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://xiv.sleepyshiba.com/pld/sets/730chicken.png \nhttps://discord.com/channels/277897135515762698/1255739270958809098');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'pld'
};