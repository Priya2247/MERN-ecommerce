const { response } = require('express');
const productModel=require('../models/productModels')
exports.getProducts = async (req, res, next) => {
    try {
        const products = await productModel.find({});
        res.json({
            success: true,
            message: "The products are visible now",
            data: products
        });
    } catch (error) {
        next(error); 
}
};

exports.getSingleProducts=async(req,res,next)=>{
    try{
      console.log(req.params.id,'ID')
      await productModel.findById(req.params.id)
    res.json({
        success:true,
        message:"The details of the single product shown here"
    })
}
catch(error){
    res.status(404).json({
          success:false,
          message:"Cannot able to get the product"
    })
}
}