const express = require("express");
const path = require("path");
// const dotenv = require("dotenv")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const crypto = require("crypto")
const SendEmail = require("./sendmail.js");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static("assets"));
app.use("/css", express.static(__dirname + "assets/css"));
app.use("/js", express.static(__dirname + "assets/js"));
app.use("/vendor", express.static(__dirname + "assets/vendor"));
app.use("/img", express.static(__dirname + "assets/img"));
app.use("/views", express.static(__dirname + "views"));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: "false",
  })
);
app.set("views", "./views");
app.set("view engine", "ejs");
app.get("/", async (req, res) => {
  res.render("index.ejs");
});
app.get("/home", (req, res) => {
  res.render("index.ejs");
});

app.get("/projects", (req, res) => {
  res.render("projects.ejs");
});
app.get("/mentors", (req, res) => {
  res.render("mentors.ejs");
});
app.get("/events", (req, res) => {
  res.render("events.ejs");
});
app.get("/gallery", (req, res) => {
  res.render("gallery.ejs");
});
app.get("/team", (req, res) => {
  res.render("team.ejs");
});
app.get("/achievement", (req, res) => {
  res.render("achievement.ejs");
});
app.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy.ejs");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve index.html for the '/home' endpoint as well
app.get("/vayurvya", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "aerox.html"));
});
app.get("/aerox", (req, res) => {
  res.sendFile(path.join(__dirname, "aerox.html"));
});

app.get("/rotorcraft", (req, res) => {
  res.sendFile(path.join(__dirname, "rotorcraft.html"));
});

app.get("/skyprobe", (req, res) => {
  res.sendFile(path.join(__dirname, "skyprobe.html"));
});
app.get("/vichaar", (req, res) => {
  res.sendFile(path.join(__dirname, "vichaar.html"));
});
app.get("/words_with_wings", (req, res) => {
  res.sendFile(path.join(__dirname, "WordsWithWings.html"));
});
app.get("/aeroX", (req, res) => {
  res.sendFile(path.join(__dirname, "events_vayu", "aeroX.html"));
});
app.get("/rotorCraft", (req, res) => {
  res.sendFile(path.join(__dirname, "events_vayu", "rotorCraft.html"));
});
app.get("/skyProbe", (req, res) => {
  res.sendFile(path.join(__dirname, "events_vayu", "skyProbe.html"));
});
app.get("/vichaar", (req, res) => {
  res.sendFile(path.join(__dirname, "events_vayu", "vichaar.html"));
});

app.get("/words_with_wings", (req, res) => {
  res.sendFile(path.join(__dirname, "events_vayu", "wordsWithWings.html"));
});

app.get("/events", (req, res) => {
  res.sendFile(path.join(__dirname, "events_vayu", "events.html"));
});

app.post("/mail", (req, res) => {
  let { name, email, subject, message } = req.body;
  console.log(name, email, subject, message);
  console.log(req.body);
  SendEmail.sendmail(name, email, subject, message);
  res.send("Successful");
});

app.listen(port, () => {
  console.log(
    `Connection is established with the required port number ${port}`
  );
});
