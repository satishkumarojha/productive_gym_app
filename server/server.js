const server = require('./src/index');
const connectdb = require('./src/config/db');
const PORT = process.env.PORT || 3001;
server.listen(PORT, async() => {
   try{
    await connectdb();
    console.log('SERVER RUNNING');
   }
   catch(e){
    console.log(e);
   }
  });