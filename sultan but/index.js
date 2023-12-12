import {Client} from "discord.js"
const client = new Client({
    intents:[]
})
  


// client.on('ready!',()=>{
//     console.log('ready');
// })

client.login('MTE3MjA3NjI5Nzg5MjEzNDkxMg.GUsPfx.eylvG50NK2_4X20zWPubcJUKaYxPmQd0WhVyJA').then(()=>{
    console.log('ready!')
}).catch(console.error);