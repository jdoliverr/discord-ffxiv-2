const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50: https://etro.gg/gearset/f3f765a3-56a5-446e-b1e1-1c7cdd23f24b \n2.46: https://etro.gg/gearset/95b030ff-0ab3-4954-831c-99cabb94ff16 \n2.45: https://etro.gg/gearset/95e676d3-3013-44b6-be05-910c86363f60 \n2.40: https://etro.gg/gearset/388ef835-f18b-4e18-994b-b1d5fa83aa12');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'war'
};