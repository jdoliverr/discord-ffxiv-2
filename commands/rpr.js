const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.5: https://etro.gg/gearset/7b72fc2a-f07e-4df9-9a23-05dfa2c46619 \n2.49: https://etro.gg/gearset/b301e789-96da-42f2-9628-95f68345e35b \n2.48: https://etro.gg/gearset/806fb1a8-ce8f-4a09-963f-8f7ccd1cb485');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'rpr'
};