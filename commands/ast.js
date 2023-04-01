const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.31 crafted ring https://etro.gg/gearset/64a6dfe2-a91e-455a-a24b-cc41cf71f9c4');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'ast'
};