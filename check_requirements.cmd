@ECHO OFF
IF NOT EXIST %SYSTEMROOT%\System32\curl.exe (
ECHO curl command not found. Please install curl and add it to PATH environment variable. && PAUSE && EXIT
)

IF NOT EXIST %SYSTEMROOT%\System32\tar.exe (
ECHO tar command not found. Please install tar and add it to PATH environment variable. && PAUSE && EXIT
)

IF NOT EXIST %SYSTEMROOT%\System32\node.exe (
ECHO Node.js not found. Please install Node.js and add it to PATH environment variable. && PAUSE && EXIT
)

IF NOT EXIST %SYSTEMROOT%\System32\npm.cmd (
ECHO NPM not found. Please install Node.js NPM and add it to PATH environment variable. && PAUSE && EXIT
)
