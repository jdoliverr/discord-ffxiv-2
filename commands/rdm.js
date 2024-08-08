const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.48: https://etro.gg/gearset/17bca82c-2a8e-49a3-adea-9b2b4de1e2ff \n2.49: https://etro.gg/gearset/6b9137aa-b8dd-4f83-b3e3-5cf8631fc69f \n2.50: https://etro.gg/gearset/1e2f46ee-327e-4de9-83bf-08b9e3fae5ce \nhttps://discord.com/channels/277897135515762698/592613258087628800');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'rdm'
};