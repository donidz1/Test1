const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("726883361284554875
")
setInterval(function() {
channel.send(`Omg!`);
}, 30)
})

client.login(process.env.BOT_TOKEN);