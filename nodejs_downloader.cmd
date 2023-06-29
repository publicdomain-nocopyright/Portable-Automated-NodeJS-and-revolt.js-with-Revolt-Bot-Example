@ECHO OFF
TITLE Portable Automated NodeJS with revolt.js and Revolt Bot Example.

SET "requirements_met=true"

ECHO Checking Requirements...
FOR %%X IN (curl.exe tar.exe) DO (
    IF NOT EXIST "%SYSTEMROOT%\System32\%%X" (
        ECHO - %%X command not found. Please install %%X and add it to PATH environment variable.
        SET "requirements_met=false"
    ) ELSE (
        ECHO + %%X command found.
    )
)

IF "%requirements_met%"=="true" (
ECHO All requirements met. You can run the script.
) ELSE (
ECHO Please install the missing requirements and try again. && PAUSE && EXIT
)

SET "nodeDirectory=.\*node-*"
IF EXIST "%nodeDirectory%" (
	CD "%nodeDirectory%"
	"./node.exe" "./bot.js" 
)




REM Download SHASUMS256.txt to FIND latest NodeJS release filename
ECHO 1. Downloading SHASUMS256.txt
curl https://nodejs.org/dist/latest/SHASUMS256.txt > ".\SHASUMS256.txt"

ECHO 2. Parsing each line of second column of SHASUMS256.txt
FOR /F "tokens=2 delims= " %%i IN (SHASUMS256.txt) DO (
	ECHO %%i | FIND /I "win-x64.zip" >NUL && ( 
		ECHO NodeJS filename found. (%%i^)
		SET "Filename=%%i"
	) || (
		REM ECHO %%i filename does not contain string.
	)
)
IF "%Filename%"=="" ECHO Latest release filename Not found in the SHASUMS256.txt of https://nodejs.org/dist/latest/ && PAUSE && EXIT

ECHO 3. Splitting filename between .zip file extension and filename (%Filename%)
FOR %%f IN ("%Filename%") DO SET "Filename_without_extension=%%~nf"

ECHO 4. Downloading latest NodeJS using Filename.
curl "https://nodejs.org/dist/latest/%Filename%" -O
IF %ERRORLEVEL% NEQ 0 echo An error occurred while downloading NodeJS. && pause && exit /b


ECHO 5. Extracting downloaded NodeJS archive in the current directory
tar -xvf "./%Filename%" -C ./

ECHO 6. Deleting Downloaded files. 
DEL "./%Filename%"
DEL ".\SHASUMS256.txt"

ECHO 7. [Prevention] Reinstall NodeJS NPM to prevent deletion of NPM after first NPM package download/installation.
CD ".\%Filename_without_extension%"
CALL .\npm install -D npm

ECHO 8. NodeJS NPM: Install revolt.js 
CALL .\npm i revolt.js

ECHO 9. Downloading Revolt.js bot example.
curl -L "https://github.com/publicdomain-nocopyright/Portable-Automated-NodeJS-with-revolt.js-and-Revolt-Bot-Example/releases/download/refs%%2Fheads%%2Fmain/bot.js" -O

ECHO 10. Please insert Bot Token:
ECHO A Browser Window to browse your bots will be opened.
TIMEOUT /T 10
tasklist /FI "IMAGENAME eq chrome.exe" 2>NUL | find /I /N "chrome.exe">NUL && (
echo Google Chrome is running. & start chrome.exe "https://app.revolt.chat/settings/bots") || (
echo Google Chrome is not running. & start explorer "https://app.revolt.chat/settings/bots")

SET /p "bot_token=Enter Bot Token: "
ECHO|SET /p="%bot_token%">"./bot_token.txt"

ECHO 11. Starting Revolt.js bot example.
node "./bot.js" "%bot_token%"

cmd ".\"
