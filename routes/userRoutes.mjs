import express from "express";
import User from "../models/userSchema.mjs";
import Clothes from "../models/clothesSchema.mjs";
import Essentials from "../models/essentialsSchema.mjs";

const router = express.Router();

// @desc: CREATE a User
// @path: /api/user
// @access: Public
router.post("/", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

// // @desc: READ all Users
// // @path: /api/user
// // @access: Public
// router.get("/", async (req, res) => {
//   const allUsers = await User.find(req.body);
//   res.json(allUsers);
// });

// @desc: READ all Users with optional filtering by name, destination, or child query parameters
// @path: /api/user
// @access: Public
router.get("/", async (req, res) => {
  const filter = {};

  if (req.query.name) {
    filter.name = new RegExp(req.query.name, "i");
  }

  if (req.query.destination) {
    filter.destination = new RegExp(req.query.destination, "i");
  }

  if (req.query.child.toLowerCase() === "true") {
    filter.child = true;
  } else if (req.query.child.toLowerCase() === "false") {
    filter.child = false;
  }

  const allUsers = await User.find(filter);
  res.json(allUsers);
});

// @desc: READ one User
// @path: /api/user/:id
// @access: Public
router.get("/:id", async (req, res) => {
  const oneUser = await User.findById(req.params.id);

  if (!oneUser) {
    return res.status(404).json({ msg: "User not found" });
  }

  res.json(oneUser);
});

// @desc: READ all Clothes lists for one User
// @path: /api/user/:id/clothes
// @access: Public
router.get("/:id/clothes", async (req, res) => {
  const oneUser = await User.findById(req.params.id);
  const allClothes = await Clothes.find(req.body);
  let userClothes = [];

  if (!oneUser) {
    return res.status(404).json({ msg: "User not found" });
  }

  allClothes.forEach((clothes) => {
    if (clothes.userID == oneUser._id) {
      userClothes.push(clothes);
    }
  });

  res.json(userClothes);
});

// @desc: READ all Essentials lists for one User
// @path: /api/user/:id/essentials
// @access: Public
router.get("/:id/essentials", async (req, res) => {
  const oneUser = await User.findById(req.params.id);
  const allEssentials = await Essentials.find(req.body);
  let userEssentials = [];
  console.log(oneUser);

  if (!oneUser) {
    return res.status(404).json({ msg: "User not found" });
  }

  allEssentials.forEach((essentials) => {
    if (essentials.userID == oneUser._id) {
      userEssentials.push(essentials);
    }
  });

  res.json(userEssentials);
});

// @desc: UPDATE one User
// @path: /api/user/:id
// @access: Public
router.put("/:id", async (req, res) => {
  const editUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!editUser) {
    return res.status(404).json({ msg: "User not found" });
  }

  res.json(editUser);
});

// @desc: DELETE one User
// @path: /api/user/:id
// @access: Public
router.delete("/:id", async (req, res) => {
  const deleteUser = await User.findByIdAndDelete(req.params.id);

  if (!deleteUser) {
    return res.status(404).json({ msg: "User not found" });
  }

  res.json(deleteUser);
});

export default router;
