const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "2";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "513443343724970005"; // «ÌœÌ «·”——›—
var channel = "513443548457205773";//«ÌœÌ «·—Ê„
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
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`·Ì” ·œÌﬂ ’·«ÕÌ« `**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);