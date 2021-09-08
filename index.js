const Discord = require("discord.js-selfbot");
const client = new Discord.Client();

require("dotenv").config();

client.on("ready", async () => {
  console.log("Yooo your account is online");
});

client.on("message", async (msg) => {
  if(msg.author.id !== process.env.OWNER || msg.author.bot) return;
  
  let args = msg.content.slice("!".length).split(" ");
  let cmd = args.shift().toLowerCase();
  
  if(!cmd) return;
  
  /* {prefix}join [channel id] */
  if(cmd == "join") {
    if(!args[0]) return console.log("Please providevoice channel id");
    let id = args[0];
    let channel = client.channels.cache.get(id);
    if(!channel) return console.log("Channel not found");
    
    await channel.join();
    return console.log("Connect to "+ channel.name);
  }
  
  /* {prefix}channel [channel id] */
  if(cmd == "channel") {
    let guild = client.guilds.cache.get(args[0]) || msg.guild;
    if(!guild) return console.log("Make sure you run this command on server");
    let channelList = [];
    let list = guild.channels.cache.filter(x => x.type == "voice");
    list.map(x => {
      channelList.push(`${x.name} ::: ${x.id}`);
    });
    return msg.channel.send(channelList.join("\n"));
  }
  
  /*
    {prefix}leave [guild id]
    Leave all channel
  */
  if(cmd == "leave") {
    let guild = msg.guild;
    if(!guild) return console.log("Guild tidak di temukan");
    
    await client.voice.connections.map(x => x.channel.leave());
    return console.log("Keluar dari voice channel");
  }
  
});

client.login(process.env.TOKEN);