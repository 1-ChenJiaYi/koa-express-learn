const express = require('express') 

const login = express.Router() 
login.use(express.json())

login.post('/', (req, res, next) => {
  const {username, password} = req.body  
  console.log(username, password);
  if(username === 'admin' && password === '123456') {
    res.json({
      msg: "登录成功",
      code: 0, 
      token: "12312aknsda"
    })
  }
  else {
    next(-1)
  }
})

login.use((err, req, res, next) => {
  if(err === -1) {
    res.json({
      msg: "登录失败",
      code: 0  
    })
  }
})

module.exports = login 