const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50 comfy piety: https://etro.gg/gearset/d40ebdcf-49df-4518-a91d-9ccad5718a0b \n2.48 low piety: https://etro.gg/gearset/e78a29e3-1dcf-4e53-bbcf-234f33b2c831');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'whm'
};