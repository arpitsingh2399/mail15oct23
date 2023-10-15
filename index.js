const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");


const app = express();
app.use(cors());
app.use(express.json());

app.post("/check" , (req,res) =>{

let name = req.body.name;
let phone = req.body.num;
let query = req.body.query;

let txt = "name = " + name + "phone = " + phone + "query = " + query;

let transporter = nodemailer.createTransport({
service : "gmail",
auth : {
user : "singh.arpit.15et7039@gmail.com",
pass : "gmycvictbrphfvqy"

}
})

let mailOptions = {
from : "singh.arpit.15et7039@gmail.com",
to : "arpitsingh2399@gmail.com",
subject : "Enquiry Form " + name,
text : txt

}

transporter.sendMail(mailOptions , (err,info) => {
if(err)
res.status(500).json({"message" : "server error"});
else
res.status(200).json({"message" : "email sent"});



})





})



app.listen(9000, () => { console.log("ready @9000"); } );