/* This is Revolt bot.js example for use with NodeJS.

 ========= Program startup sequence and execution =========
    3. General Bot start
    4. General Bot information
    5. Bot Status Change
    6. Reply to Guild Messages
    ___________________________
    0. Import Libraries
    1. Command Line Token Insertion Support `node bot.js YOUR_BOT_TOKEN` 
    2. Start the bot and login to Revolt
======================================================================== */

/* ----------------------- 0. Import Libraries  ------------------------- */

const { Client } = require("revolt.js");

let client = new Client();

/* ----------------------- 3. General Bot start  ------------------------- */

client.on("ready", async () => {

	// Checks if bot joined any servers yet. Opens a browser tab in Windows 10; Uses bot user id, opens bot invite url 
	if (client.servers.size < 1) {
		const { spawn } = require('node:child_process')
		const command = spawn('explorer', ["https://app.revolt.chat/bot/" + client.user._id])
	}
	
/* ----------------------- 4. General Bot information ------------------------- */
	console.log(`________________________________________`);
	console.log();
	console.log(`Running Revolt Bot.`);
	console.log(`________________________________________`);
	console.log(`Running: ${__filename}`);
	console.log(" |-NodeJS version: " + process.version);
	console.log(`  |-revolt.js version: ${require(__dirname + '/node_modules/revolt.js/package.json').version}`);
	console.log(`  |-revolt.js repository: ${require(__dirname + '/node_modules/revolt.js/package.json').repository}`);
	console.info(`   |-Client API URL: ${client.api.baseURL}`)
	console.info(`   |-Client API version: ${client.configuration.revolt}`)
	
	console.info(`User ID: ${client.user.id}!`);
	console.info(`Logged in as ${client.user.username}!`);
	console.info(`Bot online: ${client.user.online}!`);
	console.info(`Bot is currently in ${client.servers.size()} ${client.servers.size() > 1 ? 'servers' : 'server'}.`);
	console.log(`Invite into more servers: ` + "https://app.revolt.chat/bot/" + client.user.id );
	
/* ----------------------- 5. Bot Status Change ------------------------- */
	
	client.user.edit({
		status: {
			text: "Listening to you.",
			presence: "Idle",
		},
	});
	
});

/* ----------------------- 6. Reply to Guild Messages  ------------------------- */
// Wait for messages and respond with a message in the guilds where this Bot Exists.
client.on("messageCreate", async (message) => {
	if (message.content === "Hello") {
		
		await message.channel.sendMessage("World");

	}
});

/* -------------------- 1. Command Line Token Insertion Support --------------------- */
//  SYNTAX: `node bot.js YOUR_BOT_TOKEN` 
//  NOTE: Ignored if bot_token.txt token exists | Inserted into bot_token.txt if file is empty
let bot_token;

(function initializeBotToken() {
	bot_token = process.argv[2];
	
	// Create bot_token.txt file if does not exist.
	const fs = require('fs');
	if (!fs.existsSync("./bot_token.txt")) {
		const stream = fs.createWriteStream('./bot_token.txt');
		stream.write("");
		stream.end();
	}
	
	// Read Bot Token from bot_token.txt file
	if (fs.statSync('./bot_token.txt').size == 0) {
		console.log("NOTE: " + "./bot_token.txt file is empty")
	} else {
		console.log("NOTE: " + "./bot_token.txt file is not empty")
		bot_token = fs.readFileSync('./bot_token.txt','utf8');
		console.log("NOTE: " + "Using bot_token from ./bot_token.txt file")
	}
	
	// Check if bot_token is not undefined
	console.log("Bot token entered: ", bot_token);
	if (bot_token == undefined) {
		console.log("NOTE " + bot_token + " bot token undefined?");
		process.exit(0);
	}
})();
/* ------------------------ 2. Start the bot and login to Revolt------------------------ */
client.loginBot(bot_token);
