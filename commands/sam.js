const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.15: https://etro.gg/gearset/4356046d-2f05-432a-a98c-632f11098ade \n2.08: https://etro.gg/gearset/56e084de-6194-45a5-8af7-6834f902f791 \n2.00: https://etro.gg/gearset/c7601428-cf57-456b-a2ed-321fd2c25ff7');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'sam'
};