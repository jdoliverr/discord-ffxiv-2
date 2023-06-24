const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2521 SpS High SpS: https://etro.gg/gearset/1d113f03-16e3-4a47-83a9-c3366a0fff84 \n1292 SpS High Crit: https://etro.gg/gearset/29cc921f-570a-4069-926f-427fc95b3acb \n824 SpS High Crit: https://etro.gg/gearset/46e5dde8-3d11-418f-948b-f6452fb0c7e3 \nhttps://discord.com/channels/277897135515762698/592613187245834260');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'blm'
};