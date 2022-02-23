
const mongoose = require("mongoose");

const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { response } = require("express");

router.post("/register", (req, res) =>{


    User.find({email : req.body.email}, (err, docs) =>{

        if(docs.length>0){
            return res.status(400).json({message : 'Something went Wrong'})
        }else{
            const newuser=new User({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            })
        
            newuser.save(err=>{
        
        
                if(!err){
                    res.send("User Registration SuccessFull")
                }else{
                    res.send("Somthing went Wrong!!!!!!!")
                }
            })
        }
        if(err){
            return res.status(400).json({message : 'Something went Wrong'})
        }
    })





    
})

router.post("/login", (req, res)=>{

    User.find({email: req.body.email, password : req.body.password}, (err, docs) => {


        if(docs.length>0){
            const user={
                name : docs[0].name,
                _id : docs[0]._id,
                email : docs[0].email
            }
            res.send(user)
        }else{
            return res.status(400).json({message : 'User Login Failed'})
        }
    })
})
module.exports = router