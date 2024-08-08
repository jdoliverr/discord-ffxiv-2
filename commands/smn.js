const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('https://xivgear.app/?page=sl%7Cd390499a-be25-4e31-b1c5-9c05f93117f9 \nhttps://discord.com/channels/277897135515762698/1255891076674355260');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'smn'
};