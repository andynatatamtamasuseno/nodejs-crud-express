const express = require('express')
const { deleteOne } = require('../models/User')
const router = express.Router()
const User = require('../models/User')


//Create users
router.post('/user', async (req, res)=>{
    const userPost = new User({
        name:req.body.name,
        address:req.body.address,
        email:req.body.email
    })

    try {
        const userPost = new User({
            name:req.body.name,
            address:req.body.address,
            email:req.body.email
        })
        const user = await userPost.save()
        res.json({data:user,statusCode:200,message:'Success'})
    } catch (error) {
        console.log(error);
        res.json({data:user,statusCode:500,message:'Error Create User'})
    }
})

//get one user
router.get('/user', async (req,res)=>{
    try {
        const name = req.query.name;
        const data = await User.findOne({name})
        if(!data) res.json({data:{}, status_code:400, message:'Data Not Found'})
        res.json({data:data, status_code:200, message:'Success'})
    } catch (error) {
        console.log(error);
        res.json({data:user,statusCode:500,message:'Error Get One User'})
    }
})

// get all user
router.get('/all-user', async (req,res)=>{
    try {

        const data = await User.find()
        res.json({data:data,status_code:200, message:'Success'})
    } catch (error) {
        console.log(error);
        res.json({data:user,statusCode:500,message:'Error Create User'})
    }
})

router.put('/user', async (req,res)=>{
    try {
        const name = req.query.name;
        const data = await User.findOne({name})
        if(data==null) res.json({message: 'Data Not Found'})
        let updateData = data;
        updateData.name = req.body.name?req.body.name:data.name
        updateData.address= req.body.address?req.body.address:data.address
        updateData.email= req.body.email?req.body.email:data.email
        const result = await User.updateOne({name:name},updateData);


        res.json({data:updateData,status_code:200,message:'Success Updated User'})
    } catch (error) {
        console.log(error);
        res.json({data:user,statusCode:500,message:'Error Create User'})
    }
})

router.delete('/user/:id', async (req, res)=>{
    try {
        const result = await User.deleteOne({_id:req.params.id})
        console.log(result);
        res.json({data:{},status_code:200,message:"Success Deleted User"})
        
    } catch (error) {
        res.json({status_code:500,message:"Error Delete User"})
    }
})

module.exports = router