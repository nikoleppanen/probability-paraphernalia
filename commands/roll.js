import discord from 'discord.js';

module.exports = {
	name: 'roll',
	description: 'Rolls dice',
	args: true,
	execute(message, args) {
        var roll = Math.floor((Math.random() * 100) + 1);
        const reply = new discord.MessageEmbed();
        reply.setTitle(message.author.username + ' rolling dice...')
        reply.addFields(
            { name: 'Dice Code', value: 'd100', inline: true},
            { name: 'Result', value: '' + roll, inline: true}
        )
        message.channel.send(reply);
	},
};