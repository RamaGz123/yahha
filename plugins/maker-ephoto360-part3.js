const fetch = require('node-fetch')  
 let handler = async (m, { conn, text, usedPrefix: _p, command }) => { 
     if (!text) throw `Masukkan Teks
Contoh : ${_p}${command} ${pickRandom(['Ziv San','Fory'])}`
     let ziv = `https://api.violetics.pw/api/ephoto360/${command}?apikey=aa37-2814-15e2&text=${text}`
     conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/28f709a2a84758d9c9286.jpg', `Tunggu Sebentar Lagi Di Proses...\n\nKalo Error/Bug Silakan Chat 
@${global.owner[1].split('@')[0]}`, wm, 'Owner', '.owner', m)
     conn.sendButtonImg(m.chat, ziv, 'Nih Kak', wm3, 'Thanks', 'thanks', m, {
    quoted: m,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://vt.tiktok.com/ZSRRmS8vh/',
            title: `Req Fitur ${command}`,
            body: wm,
          thumbnail: await (await fetch('https://telegra.ph/file/56c7e6e8466c7e77a90c2.jpg')).buffer()
        }
     }
    })
 }
handler.help = ['wallpaper-moblie', 'water-3d', 'water-effect', 'water-effect2', 'watercolor-effect', 'wedding-silver', 'wet-glass', 'wings-effect', 'women-day', 'yasuo', 'yellowskin-snake', 'yena-arena-of-valor'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(wallpaper-moblie|water-3d|water-effect|water-effect2|watercolor-effect|wedding-silver|wet-glass|wings-effect|women-day|yasuo|yellowskin-snake|yena-arena-of-valor)$/i

export default handler
