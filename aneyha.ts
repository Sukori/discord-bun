//import discord.js
import {Client, Events, GatewayIntentBits} from 'discord.js';

//new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});

//listen the client8c
client.once(Event.ClientReady, (c) => {
	console.log(`Ready! Logged in as &{c.user.tag}`);
	});

//start bot
client.login(process.env.DISCORD_TOKEN);
