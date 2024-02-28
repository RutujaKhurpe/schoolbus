const express = require('express')
const app = express()
const cors = require('cors');

const port = 5000
const bodyparser = require('body-parser')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//const bodyparser = require('body-parser');
const Razorpay = require('razorpay');
app.use(require('body-parser').json());
app.use(cors())

// var instance = new Razorpay({
//   key_id: 'rzp_test_ACsC416du03Waj',
//       key_secret: 'zqQwZvV4NOBaKAwSvgUAPCwI',
// });
//instance.payments.fetch(paymentId)

// app.get('/',(req,res) =>{
//   res.sendFile('standard.html', {root: __dirname});
// })

app.post('/order' ,async (req,res) =>{
  try{
  const razorpay = new Razorpay({
    key_id : 'rzp_test_ACsC416du03Waj',
    key_secret: 'zqQwZvV4NOBaKAwSvgUAPCwI',

  });
  const options = req.body;
  const order = await razorpay.orders.create(options);

  if(!order) {
    return res.status(500).send('error');
  }
  res.json(order)
}catch(err){
  console.log(err)
  res.status(500).send('error');
}
})

app.listen(port ,()=>{
  console.log("listening on port ", port)
} )



//bard for sms and payment link geneate
// async function processPayment() {
//   try {
//     // Create a new order
//     const order = await razorpay.orders.create({
//       amount: 100.00,
//       currency: 'INR',
//       receipt: 'receipt_123456'
//     });

//     // Get the SMS code
//     const smsCode = await razorpay.sms.send({
//       order_id: order.id, // Use the actual order ID
//       mobile: '7892745266'
//     });

//     // Verify the SMS code
//     const verification = await razorpay.sms.verify({
//       order_id: order.id,
//       sms_code: smsCode
//     });

//     // Capture payment
//     const payment = await razorpay.payments.capture({
//       payment_id: verification.payment_id
//     });

//     // Complete the order
//     await razorpay.orders.complete({
//       order_id: order.id
//     });

//     console.log('Payment successful!');
//   } catch (error) {
//     console.error('Error processing payment:', error);
//   }
// }

// processPayment();

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);

//   processPayment().then(() => {
//     console.log('Payment successful!');
//   }).catch((error) => {
//     console.error('Error processing payment:', error);
//   });
// });
