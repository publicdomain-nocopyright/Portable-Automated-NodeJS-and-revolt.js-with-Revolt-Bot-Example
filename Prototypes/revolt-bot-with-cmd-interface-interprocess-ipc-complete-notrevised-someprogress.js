const { spawn } = require('child_process');
const readline = require('readline');

function myFunction() {
  const { Client } = require('revolt.js');
  console.log('Child process is running');
  console.log('This is stdout');
  console.error('This is stderr');

  let client = new Client();

  client.on('ready', async () => console.info(`Logged in as ${client.user.username}!`));

  client.on('messageCreate', async (message) => {

    if (message.content === 'ahello') {
      message.channel.sendMessage('test19293wworldffqqew');
    } else if (message.content === 'restart') {
		
      process.send('restart');
      message.channel.sendMessage('worldr');
    }
  });

  client.loginBot('pYX_8GUtHmGJBvP1pvWhYIBzSyVnFhrEZHIp8p7CRDzAXOFLD1AShXJSPq7DZ8I5');
}

module.exports = {
  importedFunction: myFunction
};

let child;

function startChildProcess(importedFunction) {
	
	// Check what's passed before myFunction, it might be that myFunction is cached and not taked from the source file.
	// if (typeof importedFunction !== 'undefined') {
	// 	
	// child = spawn('node', ['-e', `(${importedFunction.toString()})();`], { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });
	// 	
	// }
	console.log("chilf " + importedFunction);
	if (typeof importedFunction === 'undefined') {
		
		child = spawn('node', ['-e', `(${myFunction.toString()})();`], { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

		
	}



  // Listen to stdout
  child.stdout.on('data', (data) => {
    process.stdout.write(`stdout: ${data}`);
  });

  // Listen to stderr
  child.stderr.on('data', (data) => {
    process.stderr.write(`stderr: ${data}`);
  });

  // Listen for the child process to exit
  child.on('exit', (code, signal) => {
    console.log('Child process exited with code', code);
  });

  // Listen for messages from the child process
  child.on('message', (message) => {
    if (message === 'restart') {
      // Kill the current child process
      child.kill();
	  
	  delete require.cache[require.resolve("./nodetest")];

      // Start a new child process
      startChildProcess();
    }
  });
}

// Start the initial child process
startChildProcess();

// Create a readline interface to listen for commands from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Listen for input from the console
rl.on('line', (input) => {
  if (input.trim() === 'restart') {
    // Kill the current child process
    child.kill();
	
	//delete require.cache[require.resolve('./nodetest')];
	//delete require.cache[resolved];
    // Start a new child process
	
	delete require.cache[require.resolve('./nodetest')];
	const { importedFunction } = require('./nodetest');
    startChildProcess(importedFunction);
	
  }
});

// Handle the SIGINT signal to properly exit the program
rl.on('SIGINT', () => {
  // Kill the child process if it exists
  if (child) {
    child.kill();
  }

  // Close the readline interface
  rl.close();

  // Exit the program
  process.exit();
});
