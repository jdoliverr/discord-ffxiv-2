const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.5: https://etro.gg/gearset/8a907f52-75a4-4085-9deb-6a63ffa2abd8 \n2.46 https://etro.gg/gearset/ba65b9ee-ec73-4b80-86c1-66a71849a5c8');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'drg'
};