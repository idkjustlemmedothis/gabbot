import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch';
const ims = './bb.jpg'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = (neww - old).toFixed(4)
const reSize = (buffer, ukur1, ukur2) => {
  return new Promise(async(resolve, reject) => {
      var baper = await jpegThumbnail(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jpegThumbnail.MIME_JPEG)
      resolve(ab)
  })
}
let prova = { "key": {"participants":"0@s.whatsapp.net", "fromMe": false, "id": "Halo"
}, "message": {
"locationMessage": { name: '𝐁𝐢𝐱𝐛𝐲 𝐏𝐢𝐧𝐠 𖣘',
"jpegThumbnail": fs.readFileSync('./whatsapplogo.png'),
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=15395490858:+1 (539) 549-0858\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net" 
}
let info = `
══════ •⊰۞☠︎︎⊱• ══════
𝐚𝐓𝐓ƗｖƗ𝐓à ': ${uptime}
ｖ𝑒ᒪØĆƗ𝐓à ': ${speed} ֆɛƈօռɖɨ
══════ •⊰۞☠︎︎⊱• ══════`.trim()
conn.reply(m.chat, info,prova, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null,
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(pin)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}