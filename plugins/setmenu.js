const { tmpdir } = require('os')
const { join } = require('path')
let moment = require('moment-timezone')
let { generateWAMessageFromContent } = require('@adiwajshing/baileys')
const {readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch} = require('fs')
let handler = async (m, { args, text, usedPrefix, command }) => {
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
     let wibh = moment.tz('Asia/Jakarta').format('HH') 
     let wibm = moment.tz('Asia/Jakarta').format('mm') 
     let wibs = moment.tz('Asia/Jakarta').format('ss') 
     let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss') 
     let wita = moment.tz('Asia/Makassar').format('HH:mm:ss') 
     let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": await conn.resize(await (await fetch('https://telegra.ph/file/4b3b52290039da1781811.jpg')).buffer(),300, 300)
					},
				     "title": `${ucapan()}`, 
   "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib, 
   "currencyCode": "US", 
   "priceAmount1000": "100", 
   "retailerId": wm, 
   "productImageCount": 999 
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib, 
    orderTitle: '',
    thumbnail: await conn.resize(await (await fetch('https://telegra.ph/file/4b3b52290039da1781811.jpg')).buffer(),300, 300),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
if (/menu$/i.test(command)) {
  let judul = ''
 	const sections = [ 
                 { 
                   "rows": [{ 
                     "title": "Button Document", 
                     "description": "Set All Menu With Eksternal Reply And Document", 
                     "rowId": `${usedPrefix}setallmenupdf` 
                   },{ 
                     "title": "Button Image", 
                     "description": "Set All Menu With Eksternal Reply And Image",  
                     "rowId": `${usedPrefix}setallmenuimg` 
                     }], 
                   "title": "「 Change Settings Set Menu All  」" 
                 }, { 
                     "rows": [{ 
                     "title": "Location And List With Payment",
                      "description": "Set Location And List Menu With CMD Payment",  
                     "rowId": `${usedPrefix}setmenupay` 
                   }], 
                     "title": "「 Change Settings Set Menu List 」" 
                 } 
               ]
         const listMessage = {
      text: `Please Select An Option Below To Want Change Bot Menu!`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Click Here",
      sections
    }
    conn.sendMessage(m.chat, listMessage, { quoted: ftoko, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    }
    if (/allmenupdf$/i.test(command)) {
  let filename = join('./plugins/', 'menu.js')
await unlinkSync(filename)
let bufferg = fs.readFileSync('./src/menu1.json') 
let path = `plugins/menu.js`
    await fs.writeFileSync(path, bufferg)
let msg = await generateWAMessageFromContent(m.chat, { locationMessage: { 
   name: 'Succes Set Menu PDF', 
   address: 'Sekarang Menu Ke All Menu PDF',
   url: 'https://www.tiktok.com/@colindonesia', 
   jpegThumbnail: await conn.resize(await (await fetch('https://telegra.ph/file/2e5598bce43ff6d1885da.jpg')).buffer(),300, 200)
 }}, { quoted: m }) 
  
 return conn.relayMessage(m.chat, msg.message, {})
    }
    if (/menupay$/i.test(command)) {
        let filename = join('./plugins/', 'menu.js')
await unlinkSync(filename)
let bufferg = fs.readFileSync('./src/menu2.json') 
let path = `plugins/menu.js`
    await fs.writeFileSync(path, bufferg)
let pay = await generateWAMessageFromContent(m.chat, { locationMessage: { 
   name: 'Succes Set Menu Pay', 
   address: 'Sekarang Menu Ke Menu List Menu Pay',
   url: 'https://www.tiktok.com/@colindonesia', 
   jpegThumbnail: await conn.resize(await (await fetch('https://telegra.ph/file/2e5598bce43ff6d1885da.jpg')).buffer(),300, 200)
 }}, { quoted: m }) 
  
 return conn.relayMessage(m.chat, pay.message, {})
    }
    if (/allmenuimg$/i.test(command)) {
        let filename = join('./plugins/', 'menu.js')
await unlinkSync(filename)
let bufferg = fs.readFileSync('./src/menu3.json') 
let path = `plugins/menu.js`
    await fs.writeFileSync(path, bufferg)
let pay = await generateWAMessageFromContent(m.chat, { locationMessage: { 
   name: 'Succes Set Menu Image', 
   address: 'Sekarang Menu Ke All Menu Image',
   url: 'https://www.tiktok.com/@colindonesia', 
   jpegThumbnail: await conn.resize(await (await fetch('https://telegra.ph/file/2e5598bce43ff6d1885da.jpg')).buffer(),300, 200)
 }}, { quoted: m }) 
  
 return conn.relayMessage(m.chat, pay.message, {})
    }
}
handler.help = ['setmenu']
handler.tags = ['info']
handler.command = /^(set(menu|menupay|allmenupdf|allmenuimg))$/i
handler.mods = true

module.exports = handler

function ucapan() { 
   const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃"
    }
    return res
}
