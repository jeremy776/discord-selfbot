const Discord = require("discord.js-selfbot");
const client = new Discord.Client();
const fs = require("fs");
const prefix = "!";

const express = require("express");
const app = express();

require("dotenv").config();
require("./extendedMessage.js");

client.on("ready", async () => {
  console.log("Yooo your account is online");
});

client.on("message", async (msg) => {
  if (msg.author.id !== process.env.OWNER || msg.author.bot) return;
  
  if(!msg.content.startsWith(prefix)) return;
  
  let args = msg.content.slice(prefix.length).split(" ");
  let cmd = args.shift().toLowerCase();
  
  try {
    let command = require(`./commands/${cmd}`);
    command.run(client, msg, args);
  }catch(e) {
    console.log(e.message);
  }
});

app.listen(3000);
client.login(process.env.TOKEN);