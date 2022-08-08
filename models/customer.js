var mongoose=require('mongoose')
var Schema =mongoose.Schema
var CustomerSchema=new Schema(
    {
        name:{type:String ,  maxLength:100},
        userID:{type:String ,  maxLength:100},
        email:{type:String ,  maxLength:100},
        timezone:{type:String , maxLength:100}
    }
)

CustomerSchema
    .virtual('url')
    .get(function(){
        return ''+this._id
    })

    module.exports=mongoose.model('Customer',CustomerSchema)