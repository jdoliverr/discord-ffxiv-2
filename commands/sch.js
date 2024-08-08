const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://xivgear.app/?page=sl%7Cf90fc337-1a1a-4f70-9181-7765c51126fe \nhttps://discord.com/channels/277897135515762698/1253380993482752183');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sch'
};