import express from "express";
import Clothes from "../models/clothesSchema.mjs";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  const newClothes = await Clothes.create(req.body);
  res.json(newClothes);
});

//read
router.get("/", async (req, res) => {
  const allClotheses = await Clothes.find(req.body);
  res.json(allClotheses);
});

//read one clothes list
router.get("/:id", async (req, res) => {
  const oneClothes = await Clothes.findById(req.params.id, req.body, {
    new: true,
  });

  if (!oneClothes) {
    res.status(400).json({ msg: "Clothes not found" });
  }

  res.json(oneClothes);
});

//update
router.put("/:id", async (req, res) => {
  const editClothes = await Clothes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!editClothes) {
    res.status(400).json({ msg: "Clothes not found" });
  }
  res.json(editClothes);
});

//delete
router.delete("/:id", async (req, res) => {
  const deleteClothes = await Clothes.findByIdAndDelete(req.params.id);

  if (!deleteClothes) {
    res.status(400).json({ msg: "Clothes not found" });
  }

  res.json(deleteClothes);
});

export default router;
