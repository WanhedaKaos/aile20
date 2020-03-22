const Discord = require("discord.js");
const client = new Discord.Client;
var prefix = "!";

client.login("NjYyMzI0ODU0NTgxNzU1OTE0.Xg4Xtg.5Pbn2Ln0xkZ9J7LGIW_uFvs-yJU");

client.on("message", message =>{
   if(!message.guild) return
   if(message.content === "Salut ALIE"){
       message.channel.send("Hey " + message.author + " !")
   }
   if(message.content === "Tous mes voeux ALIE"){
    message.channel.send("Non " + message.author + ", Yé né té veux pas. Désolé.")
}
});
