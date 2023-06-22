const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.5: https://etro.gg/gearset/dbedcbfc-21d0-420c-9c91-ed2e946adbe4 \n2.49: https://etro.gg/gearset/3c8ec7ad-ccfc-42ce-a129-13bd032e2220');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'rpr'
};