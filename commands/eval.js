module.exports.run = async(client, msg, args) => {
  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
      return text;
  }

  let input = args.join(' ');
  if (!input) {
    (await msg.channel.send("error")).delete({
      timeout: 10000
    });
  }
  if (input.toLowerCase().includes('client.token')) input = msg.reply('GK BOLEH NGAMBIL TOKEN DI SINI GOBLOK!')

  args = args.join(" ");
  try {
    var evaled = eval(args);
    if (typeof evaled !== 'string')
      evaled = require('util').inspect(evaled);
    msg.reply(`\`\`\`javascript\n${clean(evaled)}\n\`\`\``);
  } catch (err) {
    msg.reply(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
}