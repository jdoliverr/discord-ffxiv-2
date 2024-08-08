const Discord = require('discord.js');


exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://xivgear.app/?page=sl%7C4c102326-839a-43c8-84ae-11ffdb6ef4a2 \nhttps://discord.com/channels/277897135515762698/1246222197488615524');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'pct'
};