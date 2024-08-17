const Discord = require('discord.js');


exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.12: https://etro.gg/gearset/65fca9ef-2bea-48cd-b2d0-fe5473482f72 \n2.11: https://etro.gg/gearset/0940d164-d9ce-42fc-9926-c07bec5c4802 \n2.10: https://etro.gg/gearset/0efec098-f264-4790-a8ad-a8eb23a77afb \nhttps://discord.com/channels/277897135515762698/1246222372915118162');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'vpr'
};