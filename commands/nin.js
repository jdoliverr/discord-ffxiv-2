const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.10: https://etro.gg/gearset/c0c2ba50-b93a-4d18-8cba-a0ebb0705fed \n2.12: https://etro.gg/gearset/9e07d761-8105-4ee5-9921-8f35d8b4a631');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'nin'
};