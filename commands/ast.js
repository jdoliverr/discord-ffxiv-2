const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://xivgear.app/?page=sl%7C2d3f5173-bac8-43e4-be8a-a1d6b1fa66af \nhttps://discord.com/channels/277897135515762698/1256171881665400882');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'ast'
};