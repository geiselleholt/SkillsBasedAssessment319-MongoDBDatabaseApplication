import express from "express";
import User from "../models/userSchema.mjs";
import Clothes from "../models/clothesSchema.mjs";

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
    console.log(clothes.userID);
    if (clothes.userID == req.params.id) {
      userClothes.push(clothes);
    }
  });

  if (!user) {
    res.status(400).json({ msg: "User not found" });
  }

  res.json(userClothes);
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
