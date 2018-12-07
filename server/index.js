require("dotenv").config();
const express = require("express");
const app = express();
const { SESSION_SECRET: secret, CONNECTION_STRING, PORT } = process.env;
const port = PORT || 3100;
const session = require("express-session");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
const authCtrl = require("./controllers/authCtrl");
const masterRoutes = require("./masterRoutes");

// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const aws = require('aws-sdk')

// aws.config.update({
//   secretAccessKey: (process.env.AWS_SECRET_ACCESS_KEY),
//   asscessKeyId: (process.env.AWS_ACCESS_KEY_ID),
//   region: 'us-east-2'
// })

// const s3 = new aws.S3();

app.use(json());
app.use(cors());
app.use(
  session({
    secret,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1209600000 // two weeks
    }
  })
);

// app.use(multer({dest:'/api/user/image'}).single('image'));

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

authCtrl(app);
masterRoutes(app);

app.listen(port, () => console.log(`Server now running on port ${port}`));
