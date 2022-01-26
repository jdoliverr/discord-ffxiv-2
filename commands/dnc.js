const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.49: https://etro.gg/gearset/eb9c642d-fbaf-4381-95ce-988f8b9ff621 \n2.50: https://etro.gg/gearset/ae461afa-fc40-46a1-b713-e17fb9eee292');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'dnc'
};