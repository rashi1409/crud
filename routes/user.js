const express = require('express')
const router = express.Router()
const User = require('../model/user')
router.get('/',async(req,res)=>{
    console.log('get request')
    try{
          const users = await User.find()
          res.json(users)
    }
    catch(err){
        console.log('Error'+err)
    }
})
router.get('/:id',async(req,res)=>{
    console.log('get request')
    try{
          const user = await User.findById(req.params.id)
          res.json(user)
    }
    catch(err){
        console.log('Error'+err)
    }
})
router.post('/',async(req,res)=>{
    const user = new User({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email
    })
    try{
       const a1= await user.save()
       res.json(a1)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})
router.patch('/:id',async(req,res)=>{
    
    try{
          const user = await User.findById(req.params.id)
          user.email=req.body.email
          const a1= await user.save()
          res.json(a1)
    }
    catch(err){
        res.send('Error')
    }

})
router.delete('/:id',async(req,res)=>{
    
    try{
          const user = await User.findById(req.params.id)
          
          const a1= await user.remove()
          res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})
module.exports = router