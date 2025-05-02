import express from "express";
import User from "../models/userSchema.mjs";
import Clothes from "../models/clothesSchema.mjs";
import Essentials from "../models/essentialsSchema.mjs";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

//read
router.get("/", async (req, res) => {
  const allUsers = await User.find(req.body);
  res.json(allUsers);
});

//read one user
router.get("/:id", async (req, res) => {
  const oneUser = await User.findById(req.params.id, req.body, {
    new: true,
  });

  if (!oneUser) {
    res.status(400).json({ msg: "User not found" });
  }

  res.json(oneUser);
});

// get all clothes list for one user
router.get("/:id/clothes", async (req, res) => {
  let user = req.params.id;
  const allClothes = await Clothes.find(req.body);
  let userClothes = [];

  allClothes.forEach((clothes) => {
    if (clothes.userID == req.params.id) {
      userClothes.push(clothes);
    }
  });

  if (!user) {
    res.status(400).json({ msg: "User not found" });
  }

  res.json(userClothes);
});

// get all essentials list for one user
router.get("/:id/essentials", async (req, res) => {
  let user = req.params.id;
  const allEssentials = await Essentials.find(req.body);
  let userEssentials = [];

  allEssentials.forEach((essentials) => {
    if (essentials.userID == user) {
      userEssentials.push(essentials);
    }
  });

  if (!user) {
    res.status(400).json({ msg: "User not found" });
  }

  res.json(userEssentials);
});

//update
router.put("/:id", async (req, res) => {
  const editUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!editUser) {
    res.status(400).json({ msg: "User not found" });
  }
  res.json(editUser);
});

//delete
router.delete("/:id", async (req, res) => {
  const deleteUser = await User.findByIdAndDelete(req.params.id);

  if (!deleteUser) {
    res.status(400).json({ msg: "User not found" });
  }

  res.json(deleteUser);
});

export default router;
