const express = require('express') 
const path = require('path')

const img = express.Router() 
// 使用绝对路径，确保正确指向 mock/uploads
img.use(express.static(path.resolve(__dirname, '../uploads'))) 
// img.use(express.static('../uploads'))

img.get('/', (req, res, next) => {
  res.end("img get") 
})

module.exports = img 
