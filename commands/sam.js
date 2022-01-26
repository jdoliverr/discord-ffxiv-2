const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.14: https://etro.gg/gearset/3a7c7f45-b715-465d-a377-db458045506a \n2.07: https://etro.gg/gearset/17d99be3-021c-4d6c-a9e3-0504e62c8c1f \n2.00: https://etro.gg/gearset/84c1f493-7f65-4d9e-bd3c-34965c75cf41');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sam'
};