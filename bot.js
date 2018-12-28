const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528179627638784010")
setInterval(function() {
channel.send(`ksmk yad 3la ksm abok`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
