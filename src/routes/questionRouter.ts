import { authMiddleware } from "../middleware/authMiddleware";
import {
  bulkUploadQuestions,
  createQuestion,
  deleteQuestion,
  getQuestionByCategory,
  getQuestions,
  updateQuestion,
} from "../controllers/questionController";
import { Router } from "express";

const router = Router();

// router.route("/").post(createQuestion).get(getQuestion);
// router.route("/:id").put().delete();

router.post("/", createQuestion);
router.post("/bulk", bulkUploadQuestions);
router.get("/", getQuestions);
router.get("/:categoryid", getQuestionByCategory);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);

export default router;
