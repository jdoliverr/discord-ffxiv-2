const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.46 w/ SpS melds: https://etro.gg/gearset/840a5088-23fa-49c5-a12a-3731ca55b4a6 \n2.48 w/o SpS melds: https://etro.gg/gearset/79f43ffa-6b37-417c-bc24-8b36ea303ee8 \n2.20 Speed  w/ sps melds: https://etro.gg/gearset/0dc3c04b-07bd-43c5-b07d-e196e93aa29f \n2.25 w/o SpS melds: https://etro.gg/gearset/dd37ae1d-6341-4fd0-bc46-d406db34562d');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'smn'
};