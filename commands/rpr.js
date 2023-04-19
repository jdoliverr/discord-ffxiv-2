const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.5: https://etro.gg/gearset/00b6b315-5807-4238-9164-428ab3dedeaa \n2.49: https://etro.gg/gearset/c293f73b-5c58-4855-b43d-aae55b212611');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'rpr'
};