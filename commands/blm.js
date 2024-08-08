const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.42 Omnicaster: https://etro.gg/gearset/903fafde-f0bf-4e99-9d80-4aceab2d36f2 \n2.40 High Crit: https://etro.gg/gearset/4b8aa2db-e994-4d6f-a2ab-7183c45e1abe \n2.36 High Crit: https://etro.gg/gearset/9132ff2a-cdf8-499e-9e33-35d85aa61599 \n2.24 High SpS: https://etro.gg/gearset/28dfabb8-911c-4e91-9725-85abbe4cada6 \n2.19 Max SpS: https://etro.gg/gearset/01f9c125-ff1e-4637-b2b4-8d3e01c48d8f \nhttps://discord.com/channels/277897135515762698/1255595442926915584');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'blm'
};