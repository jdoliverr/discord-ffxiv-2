const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send(`
        Commands-
Healers
**!WHM** - White mage build
**!AST** - Astro build
**!SCH** - Scholar build
**!SGE** - Sage build
Tanks
**!WAR** - Warrior build
**!DRK** - Dark knight build
**!GNB** - Gunbreaker build
DPS
-Magical
**!BLM** - Black Mage build
**!SMN** - Summoner build
**!RDM** - Red Mage build
-Physical
**!DNC** - Dancer build
**!MCH** - Machinist build
**!BRD** - Bard build
-Melee
**!NIN** - Ninja build
**!SAM** - Samurai build
**!DRG** - Dragoon build
**!MNK** - Monk build
**!RPR** - Reaper build
-Crafter
**!DOH** - Crafter melds
-Gatherer
**!DOL** - Gatherer melds
        `);} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'help'
};