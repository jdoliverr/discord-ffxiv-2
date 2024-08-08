const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://xivgear.app/?page=sl%7C1589cdf4-7037-421f-8503-790d270d51ff \nhttps://discord.com/channels/277897135515762698/1255958606730236005');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'nin'
};