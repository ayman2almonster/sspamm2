const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "523495843454779404"; 
var channel = "523495843454779406";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dream  , Dream , Dream Dream  , Dream , DreamDream  , Dream , DreamDream  , Dream , DreamDream  , Dream , DreamDream  , Dream , DreamDream  , Dream , DreamDream  , Dream , DreamDream  , Dream , DreamDream  , Dream , DreamDream  , Dream , Dreamayman, Dream ,Dream , Dream , Dream , Dream Dream, Dream , Dream ,Dream , Dream , Dream , Dream Dream , Dream, Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },500);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);
