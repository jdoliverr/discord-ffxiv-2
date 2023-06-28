const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.40 Mid Pi: https://etro.gg/gearset/dd23abd5-ac82-4a51-8d66-323695bb3556 \n2.40 Lo Pi: https://etro.gg/gearset/91cd8ea6-3ee9-4e3c-a38f-7341bd94fee1 \nhttps://discord.com/channels/277897135515762698/593563604729593856');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sch'
};