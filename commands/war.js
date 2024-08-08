const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50: https://xivgear.app/?page=sl%7C303a1726-0a49-41b8-b9ef-6f2123122743 \n2.45: https://xivgear.app/?page=sl%7C1cb5db3d-94b1-462f-821d-4cd264423318 \n2.40: https://xivgear.app/?page=sl%7Cb5698fc8-df11-4883-88e1-5e5a490a6e4a \nhttps://discord.com/channels/277897135515762698/1255597633561428113');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'war'
};