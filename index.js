console.log('Discord Template');

const Discord = require('discord.js');
const config = require('./auth.json');
const client = new Discord.Client();

client.login('TOKEN');


client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Discord Bot Online');
}

client.on('message', message => {
	console.log(message.content);
});

//Embed Discord Code
// client.on('message',(msg) =>{
// 	if (msg.content === '!nv'){
// 		const t0k1 = new Discord.MessageEmbed()
// 		.setTitle('TEXT')
// 		.setColor('#05ffa1')
// 		msg.channel.send(t0k1);
// 	}
// })
client.on('message', msg => {
	if (msg.content === '!TEXT') {
		msg.channel.send("TEXT");
	}
});
