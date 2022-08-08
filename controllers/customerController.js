var Customers=require('../models/Customer')
var async=require('async')
const {body,validationResult}=require('express-validator')
exports.customer_list=async(req,res)=>{
    Customers.find((err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
}
exports.customer_details=(req,res)=>{

        Customers.findById(req.params.id,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
            return(res.json(data))
            }
        })
        
    
}

exports.customer_create_post=async(req,res,next)=>{
    
    
   var customernew=new Customers({
    name:req.body.name,
    userID:req.body.userID,
    email:req.body.email,
    timezone:req.body.timezone
   })
    customernew.save((err,data)=>{
        if(err){
            console.log(err)
            return next(err)
        }
        else{
            res.json(data)
            console.log(customernew)
        
        console.log("created successfully")
        }
    })
    
}
exports.customer_delete=async(req,res)=>{
    Customers.findByIdAndRemove(req.params.id,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("deleted")
        }
    })

}


exports.customer_edit=async(req,res)=>{
    Customers.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("updated")
        }
    })
}


