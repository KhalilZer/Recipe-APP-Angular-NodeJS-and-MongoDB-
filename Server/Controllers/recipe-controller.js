const Recipe = require("../Models/recipe-model");

exports.CreateRecipe = async (req, res) => {
  try {
    const data = { author: req.user.id, ...req.body };
    const createRecipe = new Recipe(data);
    await createRecipe.save();
    res
      .status(201)
      .json({ message: "Recipe created successfully", recipe: createRecipe });
  } catch (error) {
    res.status(500).json({ message: "Error creating recipe", error });
  }
};

exports.listRecipeById = async (req, res) => {
  try {
    const RecipeFounded = await Recipe.find({ author: req.user.id });

    return res.status(200).json(RecipeFounded);
  } catch (error) {
    res.status(500).json({ message: "Error getting recipe", error });
  }
};

exports.getOneRecipe = async (req, res) => {
  try {
    const RecipeFounded = await Recipe.findById(req.params.id).populate(
      "author"
    );

    if (RecipeFounded) {
      res
        .status(200)
        .json({ message: "Recipe Founded ", recipe: RecipeFounded });
    } else {
      res.status(404).json({ message: "Recipe not founded Founded " });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while getting one Recipe", error });
  }
};
exports.deleteRecipe = async (req, res) => {
  try {
    const recipeDeleted = await Recipe.findByIdAndDelete(req.params.id);

    if (recipeDeleted) {
      res.status(200).json({
        message: "Recipe deleted successfully",
        recipe: recipeDeleted,
      });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error while deleting the recipe", error });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const { author, ...data } = req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });
    if (recipeUpdated) {
      res.status(200).json({
        message: "Recipe updated successfully",
        recipe: recipeUpdated,
      });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Updading Recipe", error });
  }
};

exports.allRecipe = async (req, res) => {
  try {
    const allRecips = await Recipe.find({}).populate("author");
    res.status(200).json({ message: "All Recips", recips: allRecips });
  } catch (error) {}
};
