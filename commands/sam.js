const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.08: https://etro.gg/gearset/b25e8d82-3dcc-4656-aa62-07dce32f2976 \n2.00: https://etro.gg/gearset/b0db96d2-564d-4850-971e-54a4436d63bd');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sam'
};