"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoryController_1 = require("../controllers/categoryController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/").post(categoryController_1.createCategory).get(categoryController_1.getCategory);
router.route("/:id").put(categoryController_1.updateCategory).delete(categoryController_1.deleteCategory);
exports.default = router;
//# sourceMappingURL=categoryRouter.js.map