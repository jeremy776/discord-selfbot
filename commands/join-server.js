const axios = require('axios');

module.exports.run = async(client, msg, args) => {
  try {
    const code = args[0];
    const ENDPOINTS = {
      url: "https://discordapp.com/api/v6/invites/"+code,
      userToken: process.env.TOKEN
    };

    let data = await axios.get(ENDPOINTS.url, {
      headers: {
        'Authorization': ENDPOINTS.userToken
      }});

    axios({
      method: 'POST',
      url: ENDPOINTS.url,
      headers: {
        'Authorization': ENDPOINTS.userToken
      }
    }).then(x => {
      return msg.channel.send(`Berhasil gabung ke **${x.data.guild.name}**`);
    });
  }catch(e) {
    return msg.channel.send("Pastikan anda memasukan code yang valid");
  }
};