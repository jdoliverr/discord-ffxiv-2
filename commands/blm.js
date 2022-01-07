const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2171 SpS Speed BiS: https://etro.gg/gearset/327d090b-2d5a-4c3c-9eb9-8fd42342cce3 \n1352 SpS Crit BiS: https://etro.gg/gearset/3be02273-b36d-4297-9f28-69d40641a64b');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'blm'
};