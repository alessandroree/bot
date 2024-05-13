require('dotenv').config();
const {REST, Routes} = require('discord.js')

const commands = [
    {
        name: 'fein',
        description: 'FE!N',
    },

    {
        name: 'carnival',
        description: 'Carnival'
    }
]

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registrando i comandi con lo slash...')

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID),
            {body: commands}
        )

        console.log('I comandi sono stati registrati!')
    } catch (error) {
        console.log('Errore: ' + error)
    }
}) ()