const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('1.94: https://etro.gg/gearset/ea2f240c-e0df-42aa-850b-480994bd8e7b \n1.94 Sam Compatible: https://etro.gg/gearset/93f46795-4bde-4cc4-84c4-d4d06fa2c9f2 \n1.93: https://etro.gg/gearset/157dad7b-0663-4ff0-ac13-b735e1aaa266 \nhttps://discord.com/channels/277897135515762698/1255597186855731330');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'mnk'
};