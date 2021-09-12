const axios = require("axios");

module.exports.run = async(client, msg, args) => {
  try {
    let nama;
    let attachment = msg.attachments.first();
    let url = attachment ? attachment.url: null;
    if (!url) {
      if (checkValidImageURL(args[0])) {
        url = args[0];
        nama = args.slice(1).join(" ");
      } else {
        return msg.channel.send("Gambar tidak valid");
      }
    } else {
      nama = args.slice(0).join(' ');
    }

    if (!nama) return msg.channel.send('Kasih nama kek');
    nama = nama.replace(/ /g, '_');
    if (nama.length > 15) return msg.channel.send('Kepanjangan woi');

    await msg.guild.emojis.create(url, nama);
    return msg.channel.send(`Nama: **${nama}**\nUrl: ${url}`);
  }catch(e) {
    return msg.channel.send(`\`\`\`js\n${e}\n\`\`\``);
  }
};

function checkValidImageURL(str) {
  if (typeof str !== 'string') return false;
  return !!str.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);
}