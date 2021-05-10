require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { checkUser } = require("./controllers/middleware");
const userCtrl = require("./controllers/user");
const reviewCtrl = require("./controllers/reviews");
const podcastCtrl = require("./controllers/podcast")

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, SPOTIFY_CLIENT_ID, CLIENT_SECRET } = process.env;

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
app.post("/review/name", reviewCtrl.getReview);
app.get("/review/user", reviewCtrl.getReviewbyUser);

//ENDPOINTS - LISTEN
// app.post("https://api.podbean.com/v1/oauth/token")
app.get("https://listen-api.listennotes.com/api/v2/curated-podcasts", podcastCtrl.getCuratedPodcasts)
// app.get("https://listen-api.listennotes.com/api/v2/genres")
// app.get("https://listen-api.listennotes.com/api/v2/search")