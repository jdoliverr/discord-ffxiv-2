const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.34(if you do not raid with a BRD): https://etro.gg/gearset/83845599-bb32-4539-b829-971501856d7e \n2.33(if you do raid with a BRD): https://etro.gg/gearset/4da0c670-21b4-4f5e-8594-bb9cc311074e \n2.43(if you like slower GCD): https://etro.gg/gearset/60d1fcc9-8a2e-4e68-8205-f8b25a9de39a');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'ast'
};