const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.15: https://etro.gg/gearset/d4b6bfc6-a82f-4732-8e55-7c13e094fc1d \n2.08: https://etro.gg/gearset/b25e8d82-3dcc-4656-aa62-07dce32f2976 \n2.00: https://etro.gg/gearset/b0db96d2-564d-4850-971e-54a4436d63bd \nhttps://discord.com/channels/277897135515762698/582344575394512913');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sam'
};