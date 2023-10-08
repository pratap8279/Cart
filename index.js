const express = require('express')
const server = express();
const cors= require('cors')
server.use(express.json())
server.use(express.static('./public'))
server.use(cors())
const productRouter=require('./Router/ProductRouter')
const user=require('./Router/userRoute')
server.use('/product',productRouter.Routes)
server.use("/userApi",user.Routes)
server.listen(8000, () => {
  console.log("server start")
})