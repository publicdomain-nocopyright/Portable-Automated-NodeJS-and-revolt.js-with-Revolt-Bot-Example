// This is a bot.js example.
const { Client } = require("revolt.js");

let client = new Client();

client.on("ready", async () => {

	// Check if bot joined any servers yet.
	// Open a browser tab in Windows 10; uses bot UserID, opens bot invite url 
	if (client.servers.size < 1) {
		const { spawn } = require('node:child_process')
		const command = spawn('explorer', ["https://app.revolt.chat/bot/"+ client.user._id])
	}
	
	console.log(`Running: ${__filename}`);
	console.log("NodeJS version: " + process.version);
	console.log(`revolt.js version: ${require(__dirname + '/node_modules/revolt.js/package.json').version}`);
	console.log(`revolt.js repository: ${require(__dirname + '/node_modules/revolt.js/package.json').repository}`);
	console.info(`Client API URL: ${client.api.baseURL}`)
	console.info(`Client API version: ${client.configuration.revolt}`)
	
	console.info(`User ID: ${client.user._id}!`);
	console.info(`Logged in as ${client.user.username}!`);
	console.info(`Bot online: ${client.user.online}!`);
	console.info(`Bot is currently in ${client.servers.size()} Servers: !`);
		
	client.user.edit({
		status: {
			text: "Listening to you.",
			presence: "Idle",
		},
	});
	
});


// Wait for messages and respond with a message in the guilds where this Bot Exists.
client.on("messageCreate", async (message) => {
	if (message.content === "hello") {
		
		await message.channel.sendMessage("world");

	}
});

// `node bot.js YOUR_BOT_TOKEN` command line token insertion support | Ignored if bot_token.txt token exists | Inserted into bot_token.txt if file is empty
let bot_token = process.argv[2];

// Search and Read Bot Token from bot_token.txt file
var fs = require('fs');
if (fs.existsSync("./bot_token.txt")) {
	if (fs.statSync('./bot_token.txt').size == 0) {
		console.log("./bot_token.txt file is empty")
	} else {
		console.log("bot_token.txt file is not empty")
		bot_token = fs.readFileSync('./bot_token.txt','utf8');
	}


} else {
	
	const stream = fs.createWriteStream('./bot_token.txt');
	stream.write("");
	stream.end();
}

console.log("Bot token entered: ", bot_token);
if (bot_token == undefined) {
	console.log(bot_token + " bot token undefined?");
	process.exit(0);
}

client.loginBot(bot_token);
