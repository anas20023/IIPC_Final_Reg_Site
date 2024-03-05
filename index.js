const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv").config();

//---------------------------------------------
//---------------------------------------------

const app = express();
const PORT = process.env.PORT || 3000;
const Mong_db_string = process.env.MONGO_URL;

app.use(bodyparser.json());
app.use(express.static("public"));
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
//
//

mongoose.connect(Mong_db_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

//------------
db.on("error", () => {
  console.log("Error connecting to database");
});
db.once("open", () => {
  console.log("Connected to DB");
});

///--------

app.post("/signup", (req, res) => {
  let Name = req.body.namee;
  let Email = req.body.email;
  let Phone = req.body.phone;
  let Student_ID = req.body.id;
  let Section = req.body.section;
  let Method = req.body.method;
  let BKashNumber = req.body.bkash_nmbr;
  let NagadNumber = req.body.nagad_nmbr;
  let TransactionID = req.body.Transaction_id;
  let Reference = req.body.reference;
  let user = {
    Name: Name,
    Email: Email,
    Phone: Phone,
    StudentID: Student_ID,
    Section: Section,
    Method: Method,
    BKashNumber: BKashNumber,
    NagadNumber: NagadNumber,
    TransactionID: TransactionID,
    Reference: Reference,
    Status: "Pending",
  };
  db.collection("users").findOne(
    { StudentID: Student_ID },
    function (err, result) {
      if (err) {
        console.error("Error finding user:", err);
        return res.status(500).send("An error occurred.");
      }
      if (result == null) {
        db.collection("users").insertOne(user, function (err, result) {
          if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).send("An error occurred.");
          }
          return res.redirect("login_scc.html");
        });
      } else {
        return res.redirect("user_exist.html");
      }
    }
  );
});

//----------
app.post("/check", (req, res) => {
  let check_id = req.body.student_id;
  db.collection("users").findOne({ StudentID: check_id }, (err, result) => {
    if (result == null) {
      res.send("Not Registered!");
    } else {
      res.send("Registered!");
    }
  });
});
//----------

app
  .get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-Origin": "*",
    });
    return res.redirect("index.html");
  })
  .listen(PORT);
console.log(`Listening on Port ${PORT}`);
