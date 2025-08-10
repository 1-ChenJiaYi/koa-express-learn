const KoaRouter = require('@koa/router')

const user = new KoaRouter({
  prefix: "/user" 
})

user.get("/", (ctx, next) => {
  ctx.body = "user get" 
})

user.get("/:id", (ctx, next) => {
  ctx.body = `user get ${ctx.params.id}` 
})


module.exports = user 