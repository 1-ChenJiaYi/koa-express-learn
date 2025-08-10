const KoaRouter = require('@koa/router') 
const koaBody = require('koa-bodyparser') 

const postjson = new KoaRouter({ prefix: "/postjson" }) 
postjson.use(koaBody()) 

postjson.post("/", (ctx, next) => {
  const body = ctx.request.body 
  console.log(body); 
  ctx.body = `用户的消息: ${JSON.stringify(body)}`  
})


module.exports = postjson 