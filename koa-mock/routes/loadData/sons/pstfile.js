const KoaRouter = require('@koa/router')
const path = require('path') 
const multer = require('@koa/multer') 

const pstfile = new KoaRouter({ prefix: "/pstfile" }) 
const fileLoader = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, '../uploads'))  
    },
    filename(req, file, cb) {
      cb(null, file.originalname)
    }
  })
})  

// pstfile.post("/", fileLoader.single('avatar'), (ctx, next) => {
//   console.log(ctx.request.file); 
//   ctx.body = "文件上传成功"  
// })

pstfile.post("/", fileLoader.array('avas'), (ctx, next) => {
  console.log(ctx.request.files); 
  ctx.body = "文件上传成功"  
})

module.exports = pstfile 