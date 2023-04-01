const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2287 SpS Speed BiS: https://etro.gg/gearset/bd1b7a52-5893-4928-9d7c-d47aea22d8d2 \n1292 SpS Crit BiS: https://etro.gg/gearset/12deb5db-9f38-42e1-bdba-f8be8ddcb97d');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'blm'
};