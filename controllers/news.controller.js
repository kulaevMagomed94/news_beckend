const News = require("../model/News.model");

module.exports.newsController = {
  getNews: (req, res) => {
    News.find().then((data) => {
      res.json(data);
    });
  },
  getOneNews: (req, res) => {
    News.findById(req.params.id).then((data) => {
      res.json(data);
    });
  },
  getNewsCategoryId: (req, res) => {
    News.find({ categoryId: req.params.id }).then((data) => {
      res.json(data);
    });
  },
  addNews: (req, res) => {
    News.create({
      header: req.body.header,
      text: req.body.text,
      categoryId: req.body.categoryId,
    }).then(() => {
      res.json("Новость добавлена");
    });
  },
  deleteNews: (req, res) => {
    News.findByIdAndDelete(req.params.id).then((data) => {
      res.json(data);
    });
  },
  changeNews: (req, res) => {
    News.findByIdAndUpdate(req.params.id, {
      header: req.body.header,
      text: req.body.text,
    }).then((data) => {
      res.json(data);
    });
  },
};
