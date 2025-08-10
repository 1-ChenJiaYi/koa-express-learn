
const express = require('express')
const multer = require('multer')
const app = express()

app.use(express.json(), express.urlencoded({ extended: true })) 


// const upload = multer({
//   dest: "./uploads"
// })

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads')
    }, 
    filename(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname) 
    }
  })
}) 

app.use('/', (req, res, next) => {
  console.log("这是一个普通的中间件"); 
  next() 
})

app.get('/hst', (req, res, next) => {
  const queryInfo = req.query 
  console.log(queryInfo); 
  res.end('hst fs') 
})

app.get('/hst1/:id&:name', (req, res, next) => {
  const id = req.params.id 
  const name = req.params.name 
  console.log(id, name); 
  res.end('hst1 fs') 
})

const upload2 = multer()
app.post('/pdtest', upload2.any(), (req, res, next) => {
  console.log(req.body);  
  res.end("上传成功")
})

app.post('/upl', upload.single('avatar'), (req, res, next) => {
  console.log(req.file); 
  res.end("上传成功")
}) 

app.post('/upls', upload.array('phs'), (req, res, next) => {
  console.log(req.files); 
  res.end("上传成功")
})

app.get('/', (req, res, next) => {
  console.log("执行get");
  res.end('hello world')
})

app.post('/home', (req, res, next) => {
  console.log("执行post");

  // req.on("data", (data) => {
  //   const dataString = data.toString()
  //   const dataInfo = JSON.parse(dataString) 
  //   console.log(dataInfo); 
  // })

  console.log(req.body); 
  res.end("拿取成功")
})

app.listen(6000, () => {
  console.log("mock服务器启动成功🚀"); 
})