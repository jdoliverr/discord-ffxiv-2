const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://raw.githubusercontent.com/symphonicabyss1/images/main/sage%20max%20dps%20aaclhw.png \nhttps://discord.com/channels/277897135515762698/1253381529716129852');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sge'
};