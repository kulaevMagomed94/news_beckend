const Comment = require("../model/Comment.model");

module.exports.commentaryController = {
  deleteComment: (req, res) => {
    Comment.findByIdAndDelete(req.params.id).then((data) => {
      res.json(data);
    });
  },
  getComment: (req, res) => {
    Comment.find({ newsId: req.params.id }).then((data) => {
      res.json(data);
    });
  },
  addComment: (req, res) => {
    Comment.create({
      nameCommentator: req.body.nameCommentator,
      textComment: req.body.text,
      newsId: req.body.newsId,
    }).then((data) => {
      res.json(data);
    });
  },
};
