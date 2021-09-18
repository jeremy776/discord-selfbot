const Discord = require("discord.js-selfbot");

module.exports.run = async(client, msg, args) => {
  
  let serverID = args[0];
  if(!serverID) return msg.reply("**Masukin server id yg bener**");
  let guild = client.guilds.cache.get(serverID);
  if(!guild) return msg.reply(buatEmbed("**Server gk ketemu, join dlu make `join-server [code invite]`**"));
  let pages = args[1];
  if(!pages) return msg.reply(buatEmbed("halaman tidak di temukan"));
  let page = pages - 1;
  let current = page * 5;
  
  let urutanChannel = args[2];
  if(!urutanChannel) return msg.reply(buatEmbed("Mau masuk channel yg mana?\ngunain `!channel [server id]` untuk liat list nya"));
  
  /* get list */
  let listChannelDiscord = guild.channels.cache.filter(x => x.type == "voice")
                           .map(x => x.rawPosition)
                           .sort((a, b) => a - b);
  let listChannel = [];
  listChannelDiscord.map(x => {
    let channelFilter = guild.channels.cache.filter(g => g.type == "voice")
    .find(g => g.rawPosition == x);
    listChannel.push(channelFilter.id);
  });
  
  if(listChannel.length < 1) return msg.reply(buatEmbed("ni server gk ada voice channel"));
  
  let pageCurrent = listChannel.slice(current, current + 5);
  if(pageCurrent.length == 0) return msg.reply(buatEmbed("Halaman tidak di temukan"));
  
  let channel = pageCurrent[urutanChannel-1];
  let findChannel = guild.channels.cache.get(channel);
  if(!findChannel) return msg.reply(buatEmbed("Channel gk ketemu, masukin urutan channel yg baik dan benar"));
  
  await findChannel.join();
  return msg.reply(buatEmbed("Berhasil masuk ke channel: "+ findChannel.name));
};

function buatEmbed(content, color) {
  if(!color) color = "RANDOM";
  let embed = new Discord.MessageEmbed()
  .setColor(color)
  .setTimestamp()
  .setDescription(content);
  return embed;
}