const express = require('express')
const app = express() 

app.use(() => {
  console.log(普通中间件);
})


app.listen(9000, () => {
  console.log("服务器启动成功"); 
})