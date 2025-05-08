import express from "express";
import Essentials from "../models/essentialsSchema.mjs";

const router = express.Router();

// @desc: CREATE an Essentials list
// @path: /api/user
// @access: Public
router.post("/", async (req, res) => {
  const newEssentials = await Essentials.create(req.body);
  res.json(newEssentials);
});

// @desc: READ all Essentials lists
// @path: /api/user
// @access: Public
router.get("/", async (req, res) => {
  const allEssentialses = await Essentials.find(req.body);
  res.json(allEssentialses);
});

// @desc: READ one Essentials list
// @path: /api/user/:id
// @access: Public
router.get("/:id", async (req, res) => {
  const oneEssentials = await Essentials.findById(req.params.id, req.body, {
    new: true,
  });

  if (!oneEssentials) {
    res.status(400).json({ msg: "Essentials List not found" });
  }

  res.json(oneEssentials);
});

// @desc: UPDATE one Essentials lists
// @path: /api/user/:id
// @access: Public
router.put("/:id", async (req, res) => {
  const editEssentials = await Essentials.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!editEssentials) {
    res.status(400).json({ msg: "Essentials List not found" });
  }
  res.json(editEssentials);
});

// @desc: DELETE one Essentials lists
// @path: /api/user/:id
// @access: Public
router.delete("/:id", async (req, res) => {
  const deleteEssentials = await Essentials.findByIdAndDelete(req.params.id);

  if (!deleteEssentials) {
    res.status(400).json({ msg: "Essentials List not found" });
  }

  res.json(deleteEssentials);
});

export default router;
