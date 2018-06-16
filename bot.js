const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Znotbot desuuuuuuuuu~");
});

const prefix = "zb!";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "beep")) {
    message.channel.send("boop");
  } else
  if (message.content.startsWith(prefix + "boop")) {
    message.channel.send("beep");
  }
});

client.login("NDU3MzcwMTcxNzI4NzIzOTY4.DgYGvQ.URGWuIMAi10Gq8CZ7Zr-mz_FH68");
