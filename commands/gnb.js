const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.50 Standard: https://etro.gg/gearset/3c586380-f796-4502-9621-c9d00816cb81 \n2.50 22 Strength Races: https://etro.gg/gearset/88da32ad-e4e5-4f02-b194-840aaf5cf684 \n2.45 Standard: https://etro.gg/gearset/1cdcf24b-af97-4d6b-ab88-dcfee79f791c \n2.45 22 Strength Races: https://etro.gg/gearset/1300c0c9-cf6b-474c-aba9-f1bfeb31976d \n2.42 Standard: https://etro.gg/gearset/afa282c8-d5b9-41a8-8adf-aca95bc3de33 \n2.42 22 Strength Races: https://etro.gg/gearset/559c9e70-eeea-400d-a71f-7cb4ba304181');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'gnb'
};