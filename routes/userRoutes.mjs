import express from "express";
import User from "../models/userSchema.mjs";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  //specify action
  const newUser = await User.create(req.body);
  //return result
  res.json(newUser);
});

//read
router.get("/", async (req, res) => {
  //specify action
  const allUseres = await User.find(req.body);
  //return result
  res.json(allUseres);
});

//read one
router.get("/:id", async (req, res) => {
  //specify action
  const oneUser = await User.findById(req.params.id, req.body, {
    new: true,
  });

  if (!oneUser) {
    res.status(400).json({ msg: "User not found" });
  }

  //return result
  res.json(oneUser);
});

//update
router.put("/:id", async (req, res) => {
  //specify action
  const editUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!editUser) {
    res.status(400).json({ msg: "User not found" });
  }
  //return result
  res.json(editUser);
});

//delete
router.delete("/:id", async (req, res) => {
  //specify action
  const deleteUser = await User.findByIdAndDelete(req.params.id);

  if (!deleteUser) {
    res.status(400).json({ msg: "User not found" });
  }

  //return result
  res.json(deleteUser);
});

export default router;
