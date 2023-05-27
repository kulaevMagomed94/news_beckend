const Category = require("../model/Categories.model");

module.exports.categoriesController = {
  getCategory: (req, res) => {
    Category.find().then((data) => {
      res.json(data);
    });
  },
  deleteCategory: (req, res) => {
    Category.findByIdAndDelete(req.params.id).then((data) => {
      res.json(data);
    });
  },
  addCategory: (req, res) => {
    Category.create({
      name: req.body.name,
    }).then(() => {
      res.json("Категория добавлена");
    });
  },
};
