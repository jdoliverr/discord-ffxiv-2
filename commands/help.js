const Discord = require('discord.js');

// List of available commands

exports.run = async (bot, message, args) => {
        let member = message.mentions.members.first();
        if(!member) {message.channel.send(`
        Commands-
Healers
**!WHM** - White mage 
**!AST** - Astro 
**!SCH** - Scholar 
**!SGE** - Sage 
Tanks
**!WAR** - Warrior 
**!DRK** - Dark knight 
**!GNB** - Gunbreaker 
DPS
-Magical
**!BLM** - Black Mage 
**!SMN** - Summoner 
**!RDM** - Red Mage 
-Physical
**!DNC** - Dancer 
**!MCH** - Machinist 
**!BRD** - Bard 
-Melee
**!NIN** - Ninja 
**!SAM** - Samurai 
**!DRG** - Dragoon 
**!MNK** - Monk 
**!RPR** - Reaper 
-Crafter
**!DOH** - Crafter melds
-Gatherer
**!DOL** - Gatherer melds

The Balance Discord - https://discord.gg/thebalanceffxiv
        `);} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
};

exports.help = {
    name: 'help'
};