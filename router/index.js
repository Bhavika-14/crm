var express=require('express')
var router=express.Router()
var customer_controller=require('../controllers/customerController')
router.get('/read',customer_controller.customer_list)
router.get('/read/:id',customer_controller.customer_details)

router.post('/add',customer_controller.customer_create_post)
router.get('/',function(req,res){
    res.send("Hello")
})
router.delete('/delete/:id',customer_controller.customer_delete)
router.put('/edit/:id',customer_controller.customer_edit)

module.exports=router