const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
//variable for express
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.use(require('body-parser').json());
const port = 3001;

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  host: "localhost",
  user: "rutuja2",
  password: '123',
  database: "schoolbus"
});

//display of register user details
app.get("/register", (req, res) => {
  const sql = "SELECT Id, studentFirstName,middleName, lastName,DATE_FORMAT(dob, '%Y-%m-%d') AS dob,STD,division, guardianName, guardianMobile,alternateMobile, pickupAddress, dropAddress, emergencyMobile , email, serviceType, routeType from register";
  db.query(sql, (err, result) => {
    if (err) {
      console.log("error executing display of register", err);
      // return res.status(500).json({ error: 'internal server Error', details: err.message });
    } else {
      res.send(result)
    }
    // return res.json(data);
  });
});

//addition of register user details module
app.post('/create', (req, res) => {
  const studentFirstName = req.body.studentFirstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const dob = req.body.dob;
  const STD = req.body.STD;
  const division = req.body.division;
  const guardianName = req.body.guardianName;
  const guardianMobile = req.body.guardianMobile;
  const alternateMobile = req.body.alternateMobile;
  const pickupAddress = req.body.pickupAddress;
  const dropAddress = req.body.dropAddress;
  const emergencyMobile = req.body.emergencyMobile;
  const email = req.body.email;
  const serviceType = req.body.serviceType;
  const routeType = req.body.routeType;

  db.query('Insert Into register (studentFirstName ,middleName,lastName,  dob   , STD,division, guardianName, guardianMobile,alternateMobile, pickupAddress, dropAddress, emergencyMobile , email, serviceType, routeType ) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);',
    [studentFirstName, middleName, lastName, dob, STD, division, guardianName, guardianMobile, alternateMobile, pickupAddress, dropAddress, emergencyMobile, email, serviceType, routeType],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred during form submission.');
      } else {
        // Get the auto-incremented student ID from the result
        const studentID = result.insertId;
        console.log("Generated Student ID:", studentID); // Add this line to log the generated student ID

        // Return the student ID to the frontend
        res.json({ studentID });

      }
    }
  );
});
app.post('/signup', (req, res) => {
  const { username, password, confirmpassword, isAdmin } = req.body;

  db.query(
    'INSERT INTO signup (username, password, confirmpassword,isAdmin) VALUES (?, ?, ?,?)',
    [username, password, confirmpassword, isAdmin],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error occurred while inserting data' });
      }
      console.log('Data inserted successfully');
      return res.status(200).json({ message: 'User signed up successfully' });
    }
  );
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query(
    'SELECT * FROM signup WHERE username = ? AND password = ?',
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error occurred while fetching data' });
      }
      if (result.length === 0) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
      console.log('Login successful');
      return res.status(200).json({ message: 'Login successful', isAdmin: result[0].isAdmin });
    }
  );
});

//this below code will b be for razorpay
const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: 'rzp_test_E5Fns08Fmuc672',
  key_secret: 'y79HuGi1kOuZLEe7eJiVoj39',

});

//const createPaymentLink = async () => {
app.post('/generate-payment-link', async (req, res) => {
  try {
    // First, retrieve the guardian mobile number from the database
    const userDetailsQuery = "SELECT guardianMobile, guardianName, email FROM register WHERE Id = ?";

    // Define parameters for the query
    const userDetailsParams = [req.body.Id]; // Assuming you pass the user Id in the request body

    try {
      // Execute the single query to fetch all required fields
      const result = await new Promise((resolve, reject) => {
        db.query(userDetailsQuery, userDetailsParams, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });

      // Extract individual results from the combined result
      const guardianMobile = result[0].guardianMobile;
      const guardianName = result[0].guardianName;
      const email = result[0].email;


      const options = {
        amount: 7500,
        currency: 'INR',
        accept_partial: false,
        //first_min_partial_amount: 7500,
        reference_id: '#449',
        description: 'Aradhya School Bus Services',
        customer: {
          name: guardianName,
          contact: guardianMobile,
          email: email,
        },
        notify: {
          sms: true,
          email: true,
        },
        reminder_enable: false,
      };
      const paymentLink = await instance.paymentLink.create(options);
      console.log(paymentLink);
      res.status(200).json(paymentLink);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate payment link' });
    }
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve user details' });
}
});

// app.post('/payment', (req,res) =>{
//     const reference_id  = req.body.reference_id;
//     const amount = req.body.amount;
//     const created_at = req.body.created_at;
//     const id = req.body.id;
//     const short_url = req.body.short_url;
//     const status  = req.body.status;

//     db.query('INSERT INTO payment(reference_id,amount,created_at, id,short_url , status) VALUES (?,?,?,?,?,?)',
//     [reference_id,amount,created_at, id,short_url , status],
//     (err, result) =>{
//       if(err) {
//         console.log(err);
//         res.status(500).send("Error occurred while inserting data");
//       }else {
//         console.log("Data inserted successfully");
//         res.status(200).send("Values inserted");
//     }
//     })

//   })






//createPaymentLink();
//end of razorpay code
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//GRant permission query in MYSQL : "GRANT ALL PRIVILEGES ON schoolbus.* TO 'rutuja'@'localhost';"

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }

  console.log('Connected to MySQL');
});



//this is formatted date code
// javascript
// const unixTimestamp = options.created_at;
// const date = new Date(unixTimestamp * 1000);
// const formattedDate = date.toLocaleString();

// console.log(formattedDate);