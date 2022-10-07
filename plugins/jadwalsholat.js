const { jadwalsholat } = require('@bochilteam/scraper')
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} semarang`
    const res = await jadwalsholat(text)
conn.sendFile(m.chat, 'https://telegra.ph/file/6712e5c032951e9e80927.jpg', 'out.png',
`Jadwal Sholat *${text}*

${Object.entries(res.today).map(([name, data]) => `*Sholat ${name}:* ${data}`).join('\n').trim()}`, m, true, { jpegThumbnail: await conn.resize('https://telegra.ph/file/6712e5c032951e9e80927.jpg', 300, 200), contextInfo:{ forwardingScore: 99999, isForwarded: true, externalAdReply :{
    mediaType: 1, 
    title: 'Jangan Lupa Sholat Yah Kak!',
    body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Ziv San Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Ziv San Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`,
    thumbnail: await(await fetch('https://telegra.ph/file/472ebc25665c00f9b9ee5.jpg')).buffer(),
    renderLargerThumbnail: true, 
    sourceUrl: `https://www.tiktok.com/@colindonesia?_t=8VTagbEgl7Z&_r=1`
     }}
    })
}
handler.help = ['salat <daerah>']
handler.tags = ['islam']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

module.exports = handler
