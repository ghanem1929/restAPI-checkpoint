const express = require("express");
const dotenv = require("dotenv");
const database = require("./dataBase");
const User = require("./models/User");

database();

//access to .env file
dotenv.config({ path: "./config/.env" });

//allow express to the app
const app = express();

//routes
//get all users
app.get("/", async (req, res) => {
  try {
    const user = await User.find({});
    console.log(user);
    res.status(200).send(user);
  } catch (err) {
    console.error(err.message);
  }
});

//create new user
app.post("/", async (req, res) => {
  const user = new User({
    firstName: "chacscsima",
    lastName: "cscs",
    age: 25,
    phone: "54060728",
    email: "fffsscf@gmail.com",
  });

  try {
    const result = await user.save();
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    console.error(err.message);
  }
});

//update user
app.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userUpdated = await User.findByIdAndUpdate(id, {
      firstName: "ghanem",
    });
    const allUsers = await User.find({});
    /* console.log(userUpdated); */
    console.log(allUsers);
    res.status(200).send(allUsers);
    userUpdated.save();
  } catch (err) {
    console.error(err.message);
  }
});

//delete user
app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userDeleted = await User.findByIdAndDelete(id);
    const allUsers = await User.find({});
    /* console.log(userUpdated); */
    console.log(userDeleted);
    res.status(200).send(allUsers);
    userDeleted.save();
  } catch (err) {
    console.error(err.message);
  }
});

//the connecting port is 5000 or the value assigned to the port variable in .env file
const PORT = process.env.PORT || 5000;

//the app listening port
app.listen(PORT, () => {
  console.log(`the server started at port ${PORT}`);
});
