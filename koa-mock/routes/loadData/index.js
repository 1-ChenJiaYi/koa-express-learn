const KoaRouter = require('@koa/router') 
const query = require('./sons/query') 
const postjson = require('./sons/postjson')
const pstFd = require('./sons/pstFd')
const urlc = require('./sons/urlc')
const pstfile = require('./sons/pstfile')

const loadData = new KoaRouter({ prefix: "/loadData" })


loadData.use(query.routes()).use(query.allowedMethods())  // query
loadData.use(postjson.routes()).use(postjson.allowedMethods())  // json
loadData.use(pstFd.routes()).use(pstFd.allowedMethods())  // form-data
loadData.use(urlc.routes()).use(urlc.allowedMethods())   // urlencoded
loadData.use(pstfile.routes()).use(pstfile.allowedMethods())  // 文件上传

module.exports = loadData 