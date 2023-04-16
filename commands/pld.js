const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50: https://etro.gg/gearset/3e6864e6-ea46-402d-96a2-3fe07bb2506b \n2.45: https://etro.gg/gearset/0c8ba3f0-efe4-453f-9b38-16745a11a7b5 \n2.42: https://etro.gg/gearset/8361ed48-9503-449b-9e6c-f446dc8b0382');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'pld'
};