const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  commentName: String,
  commentText: String,
  newsToWhichItIsWrittenId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "News",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
