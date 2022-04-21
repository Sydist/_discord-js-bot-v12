const { existsSync } = require("fs");

require("dotenv").config();
const { TOKEN, PREFIX } = process.env;

const { Client } = require("discord.js");
const client = new Client();


client.on("ready", () => console.log("Started..."));

client.on("message", message => {
   if (!message.content.startsWith(PREFIX)) return;

   const args = message.content.slice(1).split(/\s+/);
   const name = args.shift();

   if (!existsSync(`./commands/${name}.js`)) return;
   require(`./commands/${name}`)(message, args);
});


client.login(TOKEN);
