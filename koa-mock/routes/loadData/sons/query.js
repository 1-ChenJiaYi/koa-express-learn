const KoaRouter = require('@koa/router') 

const query = new KoaRouter({ prefix: "/query" }) 


query.get("/", (ctx, next) => {
  const qy = ctx.query 
  console.log(qy); 
  ctx.body = `用户的消息: ${JSON.stringify(qy)}`  
})


module.exports = query 