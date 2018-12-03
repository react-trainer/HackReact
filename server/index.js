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

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

authCtrl(app);
masterRoutes(app);

app.listen(port, () => console.log(`Server now running on port ${port}`));
