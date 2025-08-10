const express = require('express') 
const user = express.Router() 

user.get('/', (req, res, next) => {
  console.log("这是一个user get方法");

  res.end("user get") 
})

module.exports = user 