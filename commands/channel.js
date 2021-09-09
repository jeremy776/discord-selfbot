const Discord = require("discord.js-selfbot");

module.exports.run = async(client, msg, args) => {
  let guild = client.guilds.cache.get(args[0]) || msg.guild;
  if (!guild) return console.log("Make sure you run this command on server");
  let channelList = [];
  let embed = new Discord.MessageEmbed();
  let list = guild.channels.cache.filter(x => x.type == "voice");
  list.map(x => {
    channelList.push(`${x} ・ ${x.id}`);
  });
  return msg.channel.send(embed.setTitle(`List voice channel server ${guild.name}`).setDescription(">>> "+channelList.map((x, i) => `**${i+1}**. ${x}`).join("\n")).setColor("RANDOM"));
};