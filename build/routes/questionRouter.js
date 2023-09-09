"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questionController_1 = require("../controllers/questionController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// router.route("/").post(createQuestion).get(getQuestion);
// router.route("/:id").put().delete();
router.post("/", questionController_1.createQuestion);
router.post("/bulk", questionController_1.bulkUploadQuestions);
router.get("/", questionController_1.getQuestion);
router.get("/:categoryid", questionController_1.getQuestionByCategory);
router.put("/:id", questionController_1.updateQuestion);
router.delete("/:id", questionController_1.deleteQuestion);
exports.default = router;
//# sourceMappingURL=questionRouter.js.map