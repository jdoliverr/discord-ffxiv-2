const Discord = require('discord.js');

// As the name implies this is the template for adding a new command. Instructions in the README
exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('Response');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'cmdTemplate'
};