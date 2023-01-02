require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
app.use(express.json())
const cors = require("cors");
app.use(cors());


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', () => console.error('Connect to database'))

require("./userDetails");

const User = mongoose.model("HackTheBreakUsers");
app.post("/register", async(req, res) =>{
  const {firstName,
  lastName,
  school,
  program,
  schoolEmail,
  term,
  firstHack,
  source,
  github,
  linkedIn,
  goal,
  team,
  strengths,
} = req.body;
console.log(firstName);
try{await User.create({firstName,
  lastName,
  school,
  program,
  schoolEmail,
  term,
  firstHack,
  source,
  github,
  linkedIn,
  goal,
  team,
  strengths,
});
res.send({status:"ok"})
}catch(error){res.send({status:"error"});
}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})