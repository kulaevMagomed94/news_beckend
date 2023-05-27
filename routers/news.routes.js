const { Router } = require("express");

const { newsController } = require("../controllers/news.controller");

const router = Router();

router.get("/news", newsController.getNews);
router.get("/news/:id", newsController.getOneNews);
router.get("/news/category/:id", newsController.getNewsCategoryId);
router.post("/news", newsController.addNews);
router.patch("/news/:id", newsController.changeNews);
router.delete("/news/:id", newsController.deleteNews);

module.exports = router;
