Aztecas Bot

A Discord bot built with Node.js and discord.js, using the slash command API.

I built this to learn event-driven programming and working against a third-party API. The command handler loads each command as its own module at startup rather than switching on a giant list, so adding a new command means adding a file rather than editing the core.

What it does
Slash commands registered through Discord's application command API
Modular command loading from the commands/ directory

Stack
	
Runtime	Node.js
Library	discord.js
Config	Environment variables via .env
Structure
index.js             Entry point, client setup and event handling
deploy-commands.js   Registers slash commands with Discord's API
commands/            One module per command
redzones/            Images to be sent

Running it

Requires Node.js and a Discord application with a bot user.

bash
git clone https://github.com/tom-does-code/Aztecas-Bot.git
cd Aztecas-Bot
npm install

Create a .env file in the project root:

DISCORD_TOKEN=your_bot_token
CLIENT_ID=your_application_id
GUILD_ID=your_server_id

Register the slash commands, then start the bot:

bash
node deploy-commands.js
node index.js
What I'd change

Built while I was learning Node, and there are things I'd do differently now:

Secrets belong in environment variables that are never committed. An earlier version of this repository tracked its .env file, which is a mistake I would not repeat
node_modules should never be committed; that's what package-lock.json is for
No error handling around API failures or rate limits
No tests around the command handlers
Command registration and the bot client could be separated more cleanly
Notes

Personal project built to learn Node.js, asynchronous event handling and working with a third-party API.
