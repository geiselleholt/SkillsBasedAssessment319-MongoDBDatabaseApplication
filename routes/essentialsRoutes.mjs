import express from "express";
import Essentials from "../models/essentialsSchema.mjs";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  const newEssentials = await Essentials.create(req.body);
  res.json(newEssentials);
});

//read
router.get("/", async (req, res) => {
  const allEssentialses = await Essentials.find(req.body);
  res.json(allEssentialses);
});

//read one
router.get("/:id", async (req, res) => {
  const oneEssentials = await Essentials.findById(req.params.id, req.body, {
    new: true,
  });

  if (!oneEssentials) {
    res.status(400).json({ msg: "Essentials not found" });
  }

  res.json(oneEssentials);
});

//update
router.put("/:id", async (req, res) => {
  const editEssentials = await Essentials.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!editEssentials) {
    res.status(400).json({ msg: "Essentials not found" });
  }
  res.json(editEssentials);
});

//delete
router.delete("/:id", async (req, res) => {
  const deleteEssentials = await Essentials.findByIdAndDelete(req.params.id);

  if (!deleteEssentials) {
    res.status(400).json({ msg: "Essentials not found" });
  }

  res.json(deleteEssentials);
});

export default router;
