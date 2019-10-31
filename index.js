require('dotenv').config();

const server = require('./api/server.js');

const port=process.env.PORT

server.get('/', (req,res)=>{
  res.status(200).json({ message: process.env.MSG})
})
server.listen(4000, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
