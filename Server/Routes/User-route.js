const express = require("express");
const cors = require("cors");
const router = express.Router();

const userController = require("../Controllers/user-controller");

const corsConfig = {
  origin: "http://localhost:4200", // L'origine de votre frontend
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  credentials: true, // Autoriser les cookies et les informations d'identification
};

router.use(cors(corsConfig));

router.post("/new-user", userController.createUser);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
module.exports = router;
