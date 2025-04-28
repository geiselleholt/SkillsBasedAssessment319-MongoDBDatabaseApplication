import express from "express";
import User from "../models/userSchema.mjs";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

//read
router.get("/", async (req, res) => {
  const allUseres = await User.find(req.body);
  res.json(allUseres);
});

//read one
router.get("/:id", async (req, res) => {
  const oneUser = await User.findById(req.params.id, req.body, {
    new: true,
  });

  if (!oneUser) {
    res.status(400).json({ msg: "User not found" });
  }

  res.json(oneUser);
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
