const errorhandle = (ec, ctx, ..._) => {
  let errcode = ec 
  let message = '' 
  switch(errcode) {
    case 404: 
      message = "404 not found" 
      break 
    case 500: 
      message = "500 internal server error" 
      break 
    default: 
      message = "unknown error" 
      break 
  }
  ctx.body = {
    code: errcode, 
    message
  }
}
module.exports = errorhandle
