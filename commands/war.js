const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50: https://etro.gg/gearset/1103c082-1c80-4bf3-bb56-83734971d5ea \n2.45: https://etro.gg/gearset/ccabf244-3ea0-4a33-a817-da4cebe6efc6 \n2.40: https://etro.gg/gearset/9343cf54-e21f-4343-ba9d-c4030eb25dd0');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'war'
};