const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.5: https://etro.gg/gearset/0001cd0d-ee54-4b85-8bb6-8ed79e9e7745 \nhttps://discord.com/channels/277897135515762698/592615206325059594');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'mch'
};