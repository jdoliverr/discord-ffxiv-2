const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50: https://etro.gg/gearset/1dee5389-9906-4690-88b7-55419a342932 \n2.44: https://etro.gg/gearset/b3847bc9-2fda-4b7b-a8a1-e1720b51a46e \n2.41: https://etro.gg/gearset/b0552aae-c8e8-4beb-bd42-f77637a4b254 \nhttps://discord.com/channels/277897135515762698/593562900539637760');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'gnb'
};