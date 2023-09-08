import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../controllers/categoryController";
import { Router } from "express";

const router = Router();

router.route("/").post(createCategory).get(getCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

export default router;
