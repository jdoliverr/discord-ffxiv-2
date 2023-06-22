const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.48: https://etro.gg/gearset/66f5ec54-c062-467f-811f-5e77a90c7aba \n2.47: https://etro.gg/gearset/53a01c1e-a167-481b-bcfd-1428815d4b55 \n2.46: https://etro.gg/gearset/b42339b3-8fca-4a4f-ad67-85343e84a4f3');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'smn'
};