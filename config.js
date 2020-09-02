const config = {
  bdUrl: process.env.DB_URL || 'mongodb+srv://Mrdaniel01:Mrdaniel01@curso-node.zi3zd.mongodb.net?retryWrites=true&w=majority',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files' ,
}

module.exports = config