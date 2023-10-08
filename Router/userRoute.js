const express=require('express')
const getUser =require('../controller/user')

const UserRoutes=express()

UserRoutes.get('/getuser',getUser.getUserData)
          .post('/createUser',getUser.createtUserData)
           .delete('/deleteuser/:id',getUser.deleteUser)
            .patch('/userupdate/:id',getUser.updateUser)
exports.Routes=UserRoutes