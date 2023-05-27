const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  titleCategory: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
