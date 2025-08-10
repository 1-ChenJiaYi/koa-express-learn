const KoaRouter = require('@koa/router') 
const path = require('path') 
const fs = require('fs') 

const reqbody = new KoaRouter({ prefix: "/reqbody" }) 

reqbody.get("/", (ctx, next) => {
  // ctx.body = Buffer.from("你好啊，ACM")  
  const rs = fs.createReadStream(path.resolve(__dirname, '../../build/index.html'))  
  ctx.body = rs 
})

module.exports = reqbody 