const express = require('express') 

const user = require('./routes/user')
const img = require('./routes/img')
const login = require('./routes/login')

const app = express() 

app.use("/user", user) 
app.use("/img", img) 
app.use("/login", login) 

app.listen(3000, () => {
  console.log('server is running on port 3000') 
})

