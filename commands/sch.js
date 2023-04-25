const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50 Hi Pi: https://etro.gg/gearset/5e124e66-7cd7-470a-95d8-f71f60811c0f \n2.40 Mid Pi: https://etro.gg/gearset/03f4b5a3-e9ab-434b-8cc2-b358546fcb60 \n2.40 Lo Pi: https://etro.gg/gearset/bb015772-1160-41a5-aa62-7e92d3998bbf');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sch'
};