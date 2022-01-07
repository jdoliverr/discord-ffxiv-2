const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.40: https://etro.gg/gearset/d6944631-b67f-468f-aca8-7d28d3187f6a \n2.46: https://etro.gg/gearset/6d0d2d4d-a477-44ea-8002-862eca8ef91d \n2.50: https://etro.gg/gearset/1e409c3f-a2ae-4236-8434-1947bb3a32a2');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'war'
};