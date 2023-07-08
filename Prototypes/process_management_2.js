const { spawn } = require('child_process');

// Define the function you want to reimport
function myFunction() {
  console.log("test");
}

// Export the function from the module
module.exports.myFunction = myFunction;

// Check if running as the child process
if (process.env.CHILD_PROCESS) {
  // Call the function
  myFunction();
} else {
  // Spawn a child process
  const child = spawn(process.execPath, ['--eval', `
    process.env.CHILD_PROCESS = true;
    const { myFunction } = require('./process_management.js');
  `]);

  // Handle child process events
  child.stdout.on('data', (data) => {
    console.log(`Child process stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`Child process stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
}
