const Discord = require('discord.js');

module.exports = {
	name: 'roll',
	description: 'Rolls dice',
	args: true,
	execute(message, args) {
		const roll = Math.floor((Math.random() * 100) + 1);
		const reply = new Discord.MessageEmbed();
		reply.setTitle(message.author.username + ' rolling dice...');
		reply.addFields(
			{ name: 'Dice Code', value: 'd100', inline: true },
			{ name: 'Result', value: '' + roll, inline: true },
		);
		message.channel.send(reply);
	},
};