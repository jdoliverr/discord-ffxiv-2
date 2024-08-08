const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://etro.gg/gearset/8b1b5c84-df4b-4925-951a-e66aeabe44c7 \nhttps://discord.com/channels/277897135515762698/1255903123935985675');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'drg'
};