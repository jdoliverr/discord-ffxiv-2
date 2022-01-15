const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50 Hi Pi: https://etro.gg/gearset/30122448-70c8-421c-bd8c-820e2905858b \n2.41 Mid Pi: https://etro.gg/gearset/f1802c19-d766-40f0-b781-f5b965cb964e \n2.40 Lo Pi: https://etro.gg/gearset/ff3ffc7a-e28c-45bf-a310-a8d8496f8ebf');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sch'
};