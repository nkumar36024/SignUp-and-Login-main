const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/user");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async (req, resp) => {
  const { email, password } = req.body;
  const result = await User.findOne({ email: email });
  if (result) {
    bcrypt.compare(password, result.password, (err, response) => {
      if (response) {
        resp.json("Success");
      } else {
        resp.json("Password is incorrect");
      }
    });
  } else {
    resp.json("Invalid Account");
  }
});

app.post("/register", async (req, resp) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const t = await User.create({ name: name, email: email, password: hash });
  resp.json(t);
});

app.listen(5000, () => {
  console.log("server is started");
});
