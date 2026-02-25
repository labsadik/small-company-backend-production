import Announcement from "../models/announcement.model.js";

export const createAnnouncement = async (req, res) => {
  const announcement = await Announcement.create({
    title: req.body.title,
    content: req.body.content,
    createdBy: req.user._id
  });
  res.status(201).json(announcement);
};

export const getAnnouncements = async (req, res) => {
  const announcements = await Announcement.find().populate("createdBy", "name");
  res.json(announcements);
};

export const updateAnnouncement = async (req, res) => {
  const announcement = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(announcement);
};

export const deleteAnnouncement = async (req, res) => {
  await Announcement.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};
