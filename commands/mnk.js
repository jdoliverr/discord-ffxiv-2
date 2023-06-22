const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('1.94(SAM 2.14): https://etro.gg/gearset/cc22e1aa-6d78-4ffe-bc53-e8466373b6bc \n1.94(SAM 2.15): https://etro.gg/gearset/4a221938-db3a-44ed-8198-fbb99d3df7b1 \n1.93: https://etro.gg/gearset/aacac26e-56b3-4341-95ff-2ae0cc97e233');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'mnk'
};