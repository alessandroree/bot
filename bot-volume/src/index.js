require('dotenv').config()
const { Client, IntentsBitField } = require("discord.js")

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on("ready", (c)=>{
    console.log("Funziona!")
    const currentTime = new Date();
    const channel = client.channels.cache.get('1230271067063586846')
    channel.send('Server ready to edge!\n'+ 'Started at: ' + currentTime.toUTCString())
    setInterval(()=>{
    channel.send("Server keeps edging!")
    }, 30000)
})

client.on("messageCreate", (message)=>{
    if (message.author.bot) {
        return;
    }
    if(message.content.includes("rizz")){
        message.reply("rizz")
    }
})

client.on('interactionCreate', (int) => {
    if (!int.isChatInputCommand()) return

    console.log(int.commandName)

    switch(int.commandName){
        case 'fein':
            int.reply('Tik Tok Rizz\nParty time\nGet your gyatt\nAnd your prime\nChat\nRizz\nRizz\nRizz\nRi ri rizz')
            break
        case 'carnival':
            int.reply('I rizz up the impossible\nGo go go go\nFanum tax yeah I just stole\nShe call me drake cause I got a pole\nI rizz up the impossible!')
            break
    }
})

client.login(process.env.TOKEN)