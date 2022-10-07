let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/4efe3abdfe650a9aaf9f7.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://github.com/sadteams/bot-md
│ *Base :* 
│ ╰ https://github.com/Fokusdotid/Family-MD
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Script Record Rama Private
🗣️ Emangnya Lu Record Bagian Mana
👤 Gw Fix Ke Heroku

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
