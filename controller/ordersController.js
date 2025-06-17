const orderModel = require('../models/orderModels');


exports.getOrders = async (req, res, next) => {
  const Items = req.body;
   console.log(Items)
  const rawAmount = Items.reduce((acc, item) => {
    const price = Number(item.product.price);
    return acc + price * item.quantity;
  }, 0);

  const amount = Number(rawAmount.toFixed(2));
  const status = 'pending';

  
  const neworder=await orderModel.create({ Items, amount, status });
  console.log("Order created ",neworder)

  res.json({
    success: true,
    totalAmount: amount,
    message: "The ordered item added successfully"
  });
};
