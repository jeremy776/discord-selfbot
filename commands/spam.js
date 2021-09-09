module.exports.run = async(client, msg, args) => {
  let times = args[0];
  if (!times) return console.log("Parameter time must be filled");
  if (isNaN(times)) return console.log("Invalid number");

  let spamMessage = args.slice(1).join(" ");
  if (!spamMessage) return console.log("Parameter message must be fille");
  if (spamMessage.length > 1900) return console.log("Limit");

  // Spam akan berhenti jika hosting mati.
  // Spam tidak bisa di berhentikan sampai angka tertentu
  for (let i = 0; i < times; i++) {
    msg.channel.send(spamMessage);
  }
};