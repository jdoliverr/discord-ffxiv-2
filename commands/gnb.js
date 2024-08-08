const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50: https://etro.gg/gearset/7d3e76b0-c2e2-42e1-8c85-5466a521633f \n2.45: https://etro.gg/gearset/87da4ce3-cf03-473c-b1a4-b6ce58c86f36 \n2.40: https://etro.gg/gearset/12120f47-b2dd-457d-972e-79180b5f4be2 \nhttps://discord.com/channels/277897135515762698/1255890958160236574');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'gnb'
};