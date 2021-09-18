const Discord = require("discord.js-selfbot");
const numberEmote = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];

module.exports.run = async(client, msg, args) => {
  let idServer = args[0];
  if (!idServer) return console.log("Please put id server");
  let guild = client.guilds.cache.get(idServer);
  if (!guild) return console.log("Server Not Found");

  let pages = args[1];
  if (!pages) pages = 1;
  if (isNaN(pages)) return console.log("invalid number");
  let page = pages - 1;

  let current = page * 5;

  let channelList = [];
  let embed = new Discord.MessageEmbed();
  let list = guild.channels.cache.filter(x => x.type == "voice")
  .map(x => x.rawPosition)
  .sort((a, b) => a - b);
  list.map(x => {
    let channelFilter = guild.channels.cache.filter(g => g.type == "voice")
    .find(g => g.rawPosition == x);
    channelList.push(`${channelFilter} ・ ${channelFilter.id}`);
  });

  msg.channel.send(buatEmbed(page, current, channelList, guild))
};

function buatEmbed(page, jumlah, channelList, guild) {
  let current = channelList.slice(jumlah, jumlah + 5);
  if (current.length == 0) {
    return new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("**Not Found**");
  }
  // get total page
  let totalPage = channelList.length / 5;
  let toArrayPage = totalPage.toString().split(".");
  let newTotalPage;

  if (toArrayPage[1]) {
    if (toArrayPage[1].length !== 0) {
      totalPage = Number(toArrayPage[0]) + 1;
    }
  }

  let embed = new Discord.MessageEmbed()
  .setTitle("Channel List in "+ guild.name)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter(`Page ${page + 1} / ${totalPage} | Show ${jumlah + 1} - ${jumlah + current.length} of ${channelList.length} channel`)
  .setDescription(current.map((x, i) => `**${i+1}**. ${x}`).join("\n"));

  return embed;
}