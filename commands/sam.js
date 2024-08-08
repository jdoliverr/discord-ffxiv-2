const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.14: https://xivgear.app/?page=sl%7C78944845-857b-4a2f-bc04-576f4c6d9dec \n2.08: https://xivgear.app/?page=sl%7C18e91d14-fbe3-4780-be2e-226044ebbd6e \nhttps://discord.com/channels/277897135515762698/1256045898153332776');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sam'
};