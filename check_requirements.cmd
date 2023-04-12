@ECHO OFF
SET "requirements_met=true"

ECHO Checking Requirements...

IF NOT EXIST %SYSTEMROOT%\System32\curl.exe (
ECHO  - curl command not found. Please install curl and add it to PATH environment variable. && SET "requirements_met=false"
) ELSE (
ECHO  + curl command found.
)

IF NOT EXIST %SYSTEMROOT%\System32\tar.exe (
ECHO  - tar command not found. Please install tar and add it to PATH environment variable. && SET "requirements_met=false"
) ELSE (
ECHO  + tar command found.
)

REM IF NOT EXIST %SYSTEMROOT%\System32\node.exe (
REM ECHO Node.js not found. Please install Node.js and add it to PATH environment variable. && SET "requirements_met=false"
REM )
REM 
REM IF NOT EXIST %SYSTEMROOT%\System32\npm.cmd (
REM ECHO NPM not found. Please install Node.js NPM and add it to PATH environment variable. && SET "requirements_met=false"
REM )

IF "%requirements_met%"=="true" (
ECHO All requirements met. You can now run the script. && PAUSE && EXIT
) ELSE (
ECHO Please install the missing requirements and try again. && PAUSE && EXIT
)
