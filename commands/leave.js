module.exports.run = async(client, msg, ags) => {
  let guild = msg.guild;
  if (!guild) return msg.channel.send("Guild tidak di temukan");

  await client.voice.connections.map(x => x.channel.leave());
  return msg.channel.send("Keluar dari voice channel");
};
