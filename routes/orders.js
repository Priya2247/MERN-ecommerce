const express=require('express')

const router=express.Router()
const {getOrders}=require('../controller/ordersController')

router.route('/orders').post(getOrders)

module.exports=router