const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("917012984396")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'Sparkymon777@gmail.com'
global.github = 'https://github.com/Sparkymon777/ASWIN-MD' // Don't Change Sometimes it cause error
global.location = 'Kerala India'
global.gurl = 'https://instagram.com/aswin_sparky.exe' // add your username
global.sudo = process.env.SUDO || '917012984396' // SUDO
global.devs = '917012984396';
global.website = 'https://sparkymodswa.blogspot.com'
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://IMGUR'
module.exports = {
  botname: process.env.BOT_NAME || 'ASWIN MD',
  ownername:process.env.OWNER_NAME || 'Aswin Sparky',
  sessionName: process.env.SESSION_ID || 'Your session id',
  author: process.env.PACK_INFO.split(";")[0] || 'A S W I N', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'Fuck',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '92',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SPARKY', // DONT PUT YOUR NAME HERE BOT WILL NOT WORK 
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
