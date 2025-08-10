const Koa = require('koa') 
const static = require('koa-static') 
const path = require('path')
// const registerRoutes = require('./router') 
const errorhandle = require('./common/errorhandle') 

const loadData = require('./routes/loadData')
const user = require('./routes/user')
const reqbody = require('./routes/reqbody')
const errort = require('./routes/test/errort')

const app = new Koa() 
// registerRoutes(app) 
app.use(static(path.resolve(__dirname, './build'))) 
app.use(user.routes()).use(user.allowedMethods()) 
app.use(loadData.routes()).use(loadData.allowedMethods()) 
app.use(reqbody.routes()).use(reqbody.allowedMethods()) 
app.use(errort.routes()).use(errort.allowedMethods()) 
app.on('error', errorhandle) 

app.listen(3000, () => {
  console.log("Server is running on port 3000🚀") 
})
module.exports = app 



