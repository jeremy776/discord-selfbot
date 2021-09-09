module.exports.run = async(client, msg, ags) => {
  let guild = msg.guild;
  if (!guild) return console.log("Guild tidak di temukan");

  await client.voice.connections.map(x => x.channel.leave());
  return console.log("Keluar dari voice channel");
};