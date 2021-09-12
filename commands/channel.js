const Discord = require("discord.js-selfbot");
const numberEmote = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];

module.exports.run = async(client, msg, args) => {
  let idServer = args[0];
  if(!idServer) return console.log("Please put id server");
  let guild = client.guilds.cache.get(idServer);
  if(!guild) return console.log("Server Not Found");
  
  let pages = args[1];
  if(!pages) pages = 1;
  if(isNaN(pages)) return console.log("invalid number");
  let page = pages - 1;
  
  let current = page * 5;
  
  let channelList = [];
  let embed = new Discord.MessageEmbed();
  let list = guild.channels.cache.filter(x => x.type == "voice");
  list.map(x => {
    channelList.push(`${x} ・ ${x.id}`);
  });
  
    
  msg.channel.send(buatEmbed(page, current, channelList, guild)).then(async x => {
    let newChannelList = channelList.slice(current, current+5);
    if(newChannelList.length == 0) return;
    
    newChannelList.map((y, i) => {
      x.react(numberEmote[i]);
    });
    
  });
    let filter = (react, user) => react.emoji.name == numberEmote[0];
    
    let collector = msg.createReactionCollector(filter,
    { time: 60000 });
    
    collector.on("collect", (react, user) => {
      return msg.reply("Hello")
    })
  // return msg.channel.send(embed.setTitle(`List voice channel server ${guild.name}`).setDescription(">>> "+channelList.map((x, i) => `**${i+1}**. ${x}`).join("\n")).setColor("RANDOM"));
};

function buatEmbed(page, jumlah, channelList, guild) {
  let current = channelList.slice(jumlah, jumlah + 5);
  if(current.length == 0) {
    return new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("**Not Found**");
  }
  let embed = new Discord.MessageEmbed()
  .setTitle("Channel List in "+ guild.name)
  .setColor("RANDOM")
  .setFooter(`Page ${page + 1} | Show ${jumlah + 1} - ${jumlah + current.length} of ${channelList.length} channel`)
  .setDescription(current.map((x, i) => `**${i+1}**. ${x}`).join("\n"));

  return embed;
}