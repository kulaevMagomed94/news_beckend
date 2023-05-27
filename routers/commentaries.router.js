const { Router } = require("express");
const { commentaryController } = require("../controllers/comment.controller");

const router = Router();

router.get("/comment/:id", commentaryController.getComment);
router.post("/comment", commentaryController.addComment);
router.delete("/comment/:id", commentaryController.deleteComment);

module.exports = router;
