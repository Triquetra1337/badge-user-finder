const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', async msg => {
  if (msg.content === '+check') {
    

    

//-----------------------BOT DEV----------------------------//
    
 for (const user of client.users.cache.array()) {
  user.fetchFlags()
}
const users = client.users.cache.filter(user => user.flags && user.flags.toArray().includes('VERIFIED_DEVELOPER')).array()

    


 //-----------------------EARLY----------------------------//

 for (const asd of client.users.cache.array()) {
  asd.fetchFlags()
}

const anan = client.users.cache.filter(user => user.flags && user.flags.toArray().includes('EARLY_SUPPORTER')).array()


//-----------------------HYPESQUAD----------------------------//
    
       
    for (const baba of client.users.cache.array()) {
  baba.fetchFlags()
}
const qwe = client.users.cache.filter(user => user.flags && user.flags.toArray().includes('HYPESQUAD_EVENTS')).array()


//-----------------------EMBED----------------------------//
    
    
let asdas = new Discord.MessageEmbed()
.setColor("BLUE")
.addField('Hype Squad Events', `${qwe.map(u => u.username)}#${qwe.map(u => u.discriminator).join('\n')}`)
.addField('Bot Developer', `${users.map(u => u.username)}#${users.map(u => u.discriminator).join('\n')}`)
.addField('Early', `${anan.map(u => u.username)}#${anan.map(u => u.discriminator).join('\n')}`)
msg.channel.send(asdas)
  }
})


client.login('TOKEN');

