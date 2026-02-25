import express from "express";
import {
  createAnnouncement,
  getAnnouncements,
  updateAnnouncement,
  deleteAnnouncement
} from "../controllers/announcement.controller.js";

import protect from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", protect, getAnnouncements);
router.post("/", protect, authorizeRoles("admin"), createAnnouncement);
router.put("/:id", protect, authorizeRoles("admin"), updateAnnouncement);
router.delete("/:id", protect, authorizeRoles("admin"), deleteAnnouncement);

export default router;
