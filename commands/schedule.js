const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('Days: Tuesday/Wednesday/Sunday \nTimes: 7:30-9:30(PST)/ 8:30-10:30(MST)/ 9:30-11:30(CST)/ 10:30-12:30(EST)');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'schedule'
};