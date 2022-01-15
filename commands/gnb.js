const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('2.40: https://etro.gg/gearset/88fbea7d-3b43-479c-adb8-b87c9d6cb5f9 \n2.41: https://etro.gg/gearset/c2962f7b-ea07-4aa9-9b84-21eb8ac03d90 \n2.42: https://etro.gg/gearset/0c777bae-1680-4b0e-ac7e-56217df5611e \n2.43: https://etro.gg/gearset/e863ace7-ffcb-4c3d-b8de-8038f99a7308 \n2.44: https://etro.gg/gearset/b8d9ed19-8b42-41de-b414-ee83ed799416 \n2.45: https://etro.gg/gearset/d6f564f3-e918-4dc8-8bf7-95764ada60a7 \n2.46: https://etro.gg/gearset/a69c29ce-50f2-4fd2-9db3-6a4704c707d8 ');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'gnb'
};