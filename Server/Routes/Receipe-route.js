const express = require("express");
const cors = require("cors");
const router = express.Router();

const RecipeController = require("../Controllers/recipe-controller");
const authMiddleware = require("../Middlewares/jwtMdlwr");

const corsConfig = {
  origin: "http://localhost:4200", // L'origine de votre frontend
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  credentials: true, // Autoriser les cookies et les informations d'identification
};

router.use(cors(corsConfig));

router.post("/create-recipe", authMiddleware, RecipeController.CreateRecipe);
router.get("/list-recipe", authMiddleware, RecipeController.listRecipeById);
router.get("/all-recipes", RecipeController.allRecipe);
router.get("/recipe/:id", authMiddleware, RecipeController.getOneRecipe);
router.delete("/recipe/:id", authMiddleware, RecipeController.deleteRecipe);
router.put("/update-recipe/:id", authMiddleware, RecipeController.updateRecipe);

module.exports = router;
