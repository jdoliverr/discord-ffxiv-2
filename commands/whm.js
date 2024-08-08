const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://xivgear.app/?page=sl%7C2310a86a-a6ac-4f89-ac15-f3903c48ea16 \nhttps://discord.com/channels/277897135515762698/1255985280427491428');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'whm'
};