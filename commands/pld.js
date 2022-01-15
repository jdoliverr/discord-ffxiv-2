const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.45: https://etro.gg/gearset/38fe3778-f2c1-4300-99e4-b58a0445e969 \n2.44: https://etro.gg/gearset/8cbbfbed-e2da-4866-8873-ffba3276b682 \n2.42: https://etro.gg/gearset/bb893548-09aa-4a75-bb2f-90971bdcab38 \n2.40: https://etro.gg/gearset/ca8e2ea6-2e6a-4e69-93b0-711a51db0a27');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'pld'
};