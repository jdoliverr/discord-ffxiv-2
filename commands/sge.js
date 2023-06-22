const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.45 Base Piety: https://etro.gg/gearset/efc239cb-6371-4d1e-b645-8dd7600575b5 \n2.46 Mid Piety: https://etro.gg/gearset/d5b50da5-a8e9-4ba0-9f2e-32f1c36ee8b4 \n2.47 High Piety: https://etro.gg/gearset/ae3151cd-68b8-4cc5-b03b-a195ed80cb4b');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sge'
};