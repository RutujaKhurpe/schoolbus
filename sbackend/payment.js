//const express = require('express')
//const app = express()
//const cors = require('cors');
//const app = express();
//const port = 3001
//const bodyparser = require('body-parser')
//app.use(express.json())
//app.use(express.urlencoded({ extended: false }))

//const bodyparser = require('body-parser');
//const Razorpay = require('razorpay');
//app.use(require('body-parser').json());
//app.use(cors())

//razoray AI generated code

//const port = 3001;

//this is my code of razorpay of node js creating payment link
// const Razorpay = require('razorpay');

// const instance = new Razorpay({
//   key_id: 'rzp_test_E5Fns08Fmuc672',
//   key_secret: 'y79HuGi1kOuZLEe7eJiVoj39',

// });

//const createPaymentLink = async () => {
// app.post('/generate-payment-link', async (req, res) => {
//   try {
//     const options = {
//       amount: 7500,
//       currency: 'INR',
//       accept_partial: false,
//       //first_min_partial_amount: 7500,
//       reference_id: '#434',
//       description: 'Payment for policy no #23456',
//       customer: {
//         name: 'ganesh Gundal',
//         contact: '+919923210412',
//         email: 'ganeshgundal@gmail.com',
//       },
//       notify: {
//         sms: true,
//         email: true,
//       },
//       reminder_enable: false,
//     };



//     const paymentLink = await instance.paymentLink.create(options);
//     console.log(paymentLink);
//     res.status(200).json(paymentLink);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to generate payment link' });
//   }
// });

// app.post('/payment', (re,res) =>{
//   const reference_id  = req.body.reference_id;
//   const amount = req.body.amount;
//   const created_at = req.body.created_at;
//   const id = req.body.id;
//   const short_url = req.body.short_url;
//   const status  = req.body.status;


// })


//createPaymentLink();

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




// //this is formatted date code
// javascript
// const unixTimestamp = 1584524459;
// const date = new Date(unixTimestamp * 1000);
// const formattedDate = date.toLocaleString();

// console.log(formattedDate);