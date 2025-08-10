const KoaRouter = require('@koa/router') 
const multer = require('@koa/multer') 

const pstFd = new KoaRouter({ prefix: "/pstFd" }) 
const formLoader = multer() 

pstFd.post("/", formLoader.any(), (ctx, next) => {
  const body = ctx.request.body 
  console.log(body); 
  ctx.body = `用户的消息: ${JSON.stringify(body)}`  
})

module.exports = pstFd 