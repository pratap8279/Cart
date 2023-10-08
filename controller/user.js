const fs=require('fs')
 const userFile=JSON.parse(fs.readFileSync('./public/db.json','utf-8'))
const userData=userFile.users

 exports.getUserData=((req,res)=>{
    res.json(userData)
    
})

 exports.createtUserData=((req,res)=>{
      const savedUser= userData.push(req.body)
      res.send(userData)
})

exports.deleteUser=((req,res)=>{
    const id=+req.params.id;
    const UserIndex=userData.findIndex((p)=>p.id==id)
    userData.splice(UserIndex,1)
    res.json(userData)
})

exports.updateUser=((req,res)=>{
    const id=+req.params.id;
    const UserIndex=userData.findIndex((p)=>p.id==id)
    const oldUser=userData[UserIndex]
     const modifedUser=userData.splice(UserIndex,1,{...oldUser,...req.body})
    res.json(userData)
})