const KoaRouter = require('@koa/router') 
const koaBody = require('koa-bodyparser') 
const urlc = new KoaRouter({ prefix: "/urlc" }) 
urlc.use(koaBody()) 
urlc.get("/", (ctx, next) => {
  const qy = ctx.request.body 
  console.log(qy); 
  ctx.body = `用户的消息: ${JSON.stringify(qy)}`  
})

module.exports = urlc 