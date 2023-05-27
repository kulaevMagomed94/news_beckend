const { Router } = require("express");

const { categoriesController } = require("../controllers/category.controller");

const router = Router();

router.get("/category", categoriesController.getCategory);
router.delete("/category/:id", categoriesController.deleteCategory);
router.post("/category", categoriesController.addCategory);

module.exports = router;
