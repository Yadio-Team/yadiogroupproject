require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { checkUser } = require("./controllers/middleware");
const userCtrl = require("./controllers/user");
const reviewCtrl = require("./controllers/reviews");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    app.listen(SERVER_PORT, () =>
      console.log(`Server & db is running ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));

//ENDPOINTS - USER
app.post("/auth/register", userCtrl.registerUser);
app.post("/auth/login", userCtrl.loginUser);
app.post("/auth/logout", userCtrl.logoutUser);
app.get("/auth/me", checkUser, userCtrl.getUser);

// ENDPOINTS - REVIEW
app.post("/review/create", reviewCtrl.createReview);
app.get("/review/title", reviewCtrl.getReview);
app.get("/review/user", reviewCtrl.getReviewbyUser);
