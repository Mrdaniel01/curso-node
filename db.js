const db = require('mongoose');
const config = require('./config')

const URI = config.bdUrl;

db.Promise = global.Promise;

async function connect(URI) {
  await db.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

console.log(' [db] DB conectada con exito') 

module.exports = connect;