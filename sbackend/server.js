const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
//variable for express
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(cors());
 app.use(express.json())

 

const db = mysql.createConnection({
    host: "localhost",
    user: "rutuja",
    password: '123',
    database: "schoolbus"
});

//display of register user details
app.get("/register", (req, res) => {
  const sql = "SELECT Id, studentFirstName ,middleName,lastName,dob,STD,division, guardianName, guardianMobile,alternateMobile, pickupAddress, dropAddress, emergencyMobile FROM register";
  db.query(sql, (err, result) => {
      if (err) {
          console.log("error executing display of register", err);
          // return res.status(500).json({ error: 'internal server Error', details: err.message });
      }else{
          res.send(result)
      }
      // return res.json(data);
  });
});





//addition of register user details module
app.post('/create',  (req, res) =>{
  const studentFirstName = req.body.studentFirstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const dob = req.body.dob;
  const STD = req.body.STD;
  const division = req.body.division;
  const guardianName = req.body.guardianName;
  const  guardianMobile = req.body.guardianMobile;
  const alternateMobile = req.body.alternateMobile;
  const pickupAddress= req.body.pickupAddress;
  const dropAddress = req.body.dropAddress;
  const emergencyMobile = req.body.emergencyMobile;
  
  db.query ('Insert Into register ( studentFirstName ,middleName,lastName,dob,STD,division, guardianName, guardianMobile,alternateMobile, pickupAddress, dropAddress, emergencyMobile) values(?,?,?,?,?,?,?,?,?,?,?,?)',
    [studentFirstName ,middleName,lastName,dob,STD,division, guardianName, guardianMobile,alternateMobile, pickupAddress, dropAddress, emergencyMobile],
    (err, result) => {
      if (err) {
        console.log(err)
      }else{
        res.send("values inserted");
      }
    })
  })

  app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword; // Corrected typo here
    
    db.query('INSERT INTO signup (username, password, confirmPassword) VALUES (?, ?, ?)',
        [username, password, confirmPassword],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error occurred while inserting data");
            } else {
                console.log("Data inserted successfully");
                res.status(200).send("Values inserted");
            }
        }
    );
});
  


  app.listen(3001, () => {
    console.log("3001 port running, yipeeee");
}
)

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }

  console.log('Connected to MySQL');
});