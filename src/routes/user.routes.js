import express from "express";
import { getUsers, deleteUser } from "../controllers/user.controller.js";
import protect from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", protect, authorizeRoles("admin"), getUsers);
router.delete("/:id", protect, authorizeRoles("admin"), deleteUser);

export default router;
