const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.45: https://etro.gg/gearset/a581634a-6def-4150-903f-2d91026471b6 \n2.43: https://etro.gg/gearset/fa149574-337a-4692-8ed2-56963ca612c3 \n2.38: https://etro.gg/gearset/aee5c1f4-5e59-47fb-88ff-3eeffbef6231 \n2.34: https://etro.gg/gearset/020093de-e69a-458f-8278-c3406eaa8eb7 \nhttps://discord.com/channels/277897135515762698/593563541571764316');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'whm'
};