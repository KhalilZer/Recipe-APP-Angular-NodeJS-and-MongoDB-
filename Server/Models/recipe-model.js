const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  preparationTime: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Asian",
      "European",
      "African",
      "American",
      "Vegetarian",
      "Vegan",
      "Dessert",
      "Other",
    ],
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
