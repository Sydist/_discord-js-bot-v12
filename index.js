require("dotenv").config();
const { Client } = require("discord.js");
const client = new Client();

client.on("ready", () => console.log("Started..."));

client.on("message", message => {
   if (message.content === "sydist")
      message.reply("What.");
});

client.login(process.env.TOKEN);
