# Portable-Automated-NodeJS-with-revolt.js-and-Revolt-Bot-Example.

### How to use: 
Here's how to use `nodejs_downloader.cmd` on Windows 10:
1. Download the script from [this link](https://github.com/publicdomain-nocopyright/Portable-Automated-NodeJS-with-revolt.js-and-Revolt-Bot-Example./releases/download/refs%2Fheads%2Fmain/nodejs_downloader.cmd).
2. Put the script in an empty folder.
3. Double-click the script.  
   * Wait for the request of bot token.
   * Create a new bot, copy the bot token, and insert the token.
   * Wait for webpage to Invite the bot into your guild.
7. Type ` Hello ` in the chat and the bot should respond with ` world `.

Next time, simply type `node bot.js` to run the bot.


### What it does: 
1. Downloads NodeJS Binaries.
2. Extracts NodeJS Binaries.
3. Reinstalls NPM and makes it ready to download new packages.
4. Installs `revolt.js` for NodeJS using NPM
5. Downloads Revolt Bot Example. (`bot.js` of this repository)
6. Asks to insert Bot Token AND opens a Web Browser with URL https://app.revolt.chat/settings/bots
7. After entering Bot Token:
   1. Saves token to `./Bot_Token.txt` file permanently for the future use.
   2. Launches Revolt Bot with Bot Token.
8. Opens a Browser Window to invite the bot to any of you existing Guilds.

### Test: 
```
curl -L https://github.com/publicdomain-nocopyright/Portable-Automated-NodeJS-with-revolt.js-and-Revolt-Bot-Example./releases/download/refs%2Fheads%2Fmain/nodejs_downloader.cmd
```

JSON information about latest release:
```
https://api.github.com/repos/publicdomain-nocopyright/Portable-Automated-NodeJS-with-revolt.js-and-Revolt-Bot-Example/releases/latest
```

According to JSON:  
ZIP file: https://api.github.com/repos/publicdomain-nocopyright/Portable-Automated-NodeJS-with-revolt.js-and-Revolt-Bot-Example/zipball/refs/heads/main  
TAR file: https://api.github.com/repos/publicdomain-nocopyright/Portable-Automated-NodeJS-with-revolt.js-and-Revolt-Bot-Example/tarball/refs/heads/main  
