const express = require("express");
const Redis =require("redis");
const util = require("util")
const port = 5000;
const client=Redis.createClient("redis://127.0.0.1:6379");

client.set=util.promisify(client.set);

var cors=require('cors');
const app = express();
app.use(express.json());
app.use(cors())

// app.get("/", (req, res) => {
//   res.send("Hello me!");
// });

app.get("/", async(req, res) => {
    
   const respons=await client.set("vc",0);

   client.get('vc', function (err, count) {
      console.log(count);
      res.send({count});
    });
});

app.get("/c", async(req, res) => {
    
  // const respons=await client.get("vc");
  
  //  res.send("Hello c!");
    client.incr('vc');
   client.get('vc', function (err, count) {
        console.log(count);
         res.send({count});
  });
  //  console.log(count);
});


// app.get('/count',async(req,res)=>{
  
// });

app.listen(port, () => {
  console.log(`visitors count backend listening at http://localhost:${port}`);
});
