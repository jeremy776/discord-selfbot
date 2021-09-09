module.exports.run = async(client, msg, args) => {
  if (!args[0]) return console.log("Please providevoice channel id");
  let id = args[0];
  let channel = client.channels.cache.get(id);
  if (!channel) return console.log("Channel not found");

  await channel.join();
  return console.log("Connect to "+ channel.name);

};