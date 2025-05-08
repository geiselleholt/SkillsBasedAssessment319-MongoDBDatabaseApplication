import express from "express";
import allUsers from "./utilities/userSeedData.mjs";
import User from "./models/userSchema.mjs";
import allClothes from "./utilities/clothesSeedData.mjs";
import Clothes from "./models/clothesSchema.mjs";
import allEssentials from "./utilities/essentialsSeedData.mjs";
import Essentials from "./models/essentialsSchema.mjs";

const router = express.Router();

// @desc: Seed MongoDB with allUsers
// @path: /seed/user
// @access: Public
router.get("/user", async (req, res) => {
  await User.deleteMany({});
  await User.create(allUsers);
  res.send("DataBase Seeded with Users");
});

// @desc: Seed MongoDB with allClothes
// @path: /seed/clothes
// @access: Public
router.get("/clothes", async (req, res) => {
  await Clothes.deleteMany({});
  await Clothes.create(allClothes);
  res.send("DataBase Seeded with Clothes");
});

// @desc: Seed MongoDB with allEssentials
// @path: /seed/essentials
// @access: Public
router.get("/essentials", async (req, res) => {
  await Essentials.deleteMany({});
  await Essentials.create(allEssentials);
  res.send("DataBase Seeded with Essentials");
});
