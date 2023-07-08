// This is source code file: process_management.js

const { spawn } = require('child_process');
const readline = require('readline');


function myFunction(){
	console.log('Child process is running'); console.log('This is stdout'); console.error('This is stderr');
	
	let { Client } = require('revolt.js'); let client = new Client();
	client.on('ready', async () => console.info(`Logged in as ${client.user.username}!`));
	client.loginBot('pYX_8GUtHmGJBvP1pvWhYIBzSyVnFhrEZHIp8p7CRDzAXOFLD1AShXJSPq7DZ8I5');

	
} 
module.exports = {
  importedFunction: myFunction
};


function startChildProcess(){
	
	delete require.cache[require.resolve('./process_management')];
	const { importedFunction } = require('./process_management');

	
	child = spawn('node', ['-e', `(${importedFunction.toString()})();`], { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });	

	child.stdout.on('data', (data) => {
		process.stdout.write(`stdout: ${data}`);
	});

	child.stderr.on('data', (data) => {
		process.stderr.write(`stderr: ${data}`);
	});
  
  
}

startChildProcess();

