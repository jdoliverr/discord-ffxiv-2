const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.47: https://etro.gg/gearset/bb37ef05-9cd3-498d-889b-dcc4934fc4bf \n2.46: https://etro.gg/gearset/750617ed-aad2-42a0-b68a-1f59b2ea035f \n2.45: https://etro.gg/gearset/bb37ef05-9cd3-498d-889b-dcc4934fc4bf');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'smn'
};