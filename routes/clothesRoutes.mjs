import express from "express";
import Clothes from "../models/clothesSchema.mjs";

const router = express.Router();

// @desc: CREATE a Clothes list
// @path: /api/user
// @access: Public
router.post("/", async (req, res) => {
  const newClothes = await Clothes.create(req.body);
  res.json(newClothes);
});

// @desc: READ all Clothes lists
// @path: /api/user
// @access: Public
router.get("/", async (req, res) => {
  const allClothes = await Clothes.find(req.body);
  res.json(allClothes);
});

// @desc: READ one Clothes list
// @path: /api/user/:id
// @access: Public
router.get("/:id", async (req, res) => {
  const oneClothes = await Clothes.findById(req.params.id);

  if (!oneClothes) {
    return res.status(404).json({ msg: "Clothes List not found" });
  }

  res.json(oneClothes);
});

// @desc: UPDATE one Clothes lists
// @path: /api/user/:id
// @access: Public
router.put("/:id", async (req, res) => {
  const editClothes = await Clothes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!editClothes) {
    return res.status(404).json({ msg: "Clothes List not found" });
  }
  res.json(editClothes);
});

// @desc: DELETE one Clothes lists
// @path: /api/user/:id
// @access: Public
router.delete("/:id", async (req, res) => {
  const deleteClothes = await Clothes.findByIdAndDelete(req.params.id);

  if (!deleteClothes) {
    return res.status(404).json({ msg: "Clothes List not found" });
  }

  res.json(deleteClothes);
});

export default router;
