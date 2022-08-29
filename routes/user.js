const express = require('express')
const router = express.Router()
const User = require('../models/User')


//Create
router.post('/user', async (req, res)=>{
    const userPost = new User({
        name:req.body.name,
        address:req.body.address,
        email:req.body.email
    })

    try {
        const user = await userPost.save()
        res.json(user)
    } catch (error) {
        res.json({message:err})
    }
})

module.exports = router