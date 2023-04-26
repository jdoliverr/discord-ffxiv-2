const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('Tome ring: https://etro.gg/gearset/39c93c65-e049-4d2c-9439-4812499f6acc \nCrafted Ring: https://etro.gg/gearset/80bec2f5-8e9e-43fb-adcf-0cd7f7018c02');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sge'
};