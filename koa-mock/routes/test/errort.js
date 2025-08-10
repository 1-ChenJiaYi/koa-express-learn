const KoaRouter = require('@koa/router') 
const errort = new KoaRouter({ prefix: "/errort" }) 

errort.get("/", (ctx, next) => {
  ctx.app.emit('error', 412312304, ctx)  
})

module.exports = errort 