// module.exports={
//     MONGOURI:"mongodb+srv://caron:sRol0xoXYReqO9Gy@cluster0.iwygi.mongodb.net/caron?retryWrites=true&w=majority",
//     JWT_SECRET:"peanuts"
// }
if(process.env.NODE_ENV==='production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}