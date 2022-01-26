const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.48: https://etro.gg/gearset/80fdec19-1109-4ca2-8172-53d4dda44144 \n2.50: https://etro.gg/gearset/8c456a46-f3cb-4a23-9771-9f267892bcc0');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'rdm'
};