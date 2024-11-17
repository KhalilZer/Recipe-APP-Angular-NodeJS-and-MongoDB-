const User = require("../Models/user-model");
const bcrypt = require("bcrypt");
const saltNumber = 10;
const jwt = require("jsonwebtoken");

const JWT_Secret = "YourCode";

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const checkUser = await User.find({ email: email });

  if (checkUser.length > 0) {
    return res.status(400).json({ message: "User already exists" });
  }

  const passwordHashed = await bcrypt.hash(password, saltNumber);
  const newUser = new User({
    name: name,
    email: email,
    password: passwordHashed,
  });
  await newUser.save();
  return res.status(200).json({ message: "User Created succefully" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const checkUser = await User.find({ email: email });
  if (checkUser.length <= 0) {
    return res.status(400).json({ message: "User not exists" });
  }
  const matchOrNot = await bcrypt.compare(password, checkUser[0].password);

  if (!matchOrNot) {
    return res.status(400).json({ message: "Password not match" });
  }
  const token = await jwt.sign({ user: checkUser }, JWT_Secret, {
    expiresIn: "1h",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({ message: "Login SUccess", token });
};

exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.json({ message: "Logout Succesfully" });
};
