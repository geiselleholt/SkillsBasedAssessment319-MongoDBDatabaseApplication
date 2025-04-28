//Imports
import express from "express";
import dotenv from "dotenv";
import { errorHandling } from "./middleware/errorHandling.mjs";
import connectionDB from "./db/conn.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import clothesRoutes from "./routes/userRoutes.mjs";
import essentialsRoutes from "./routes/userRoutes.mjs";
import allUsers from "./utilities/UserSeedData.mjs";
import User from "./models/userSchema.mjs";
import allClothes from "./utilities/clothesSeedData.mjs";
import Clothes from "./models/ClothesSchema.mjs";
import allEssentials from "./utilities/essentialsSeedData.mjs";
import Essentials from "./models/EssentialsSchema.mjs";

//SetUps
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
connectionDB();

//Middleware
app.use(express.json());

//Routes
app.use("/api/user", userRoutes);
app.use("/api/clothes", clothesRoutes);
app.use("/api/essentials", essentialsRoutes);

//Seed Data
app.get("/userSeed", async (req, res) => {
  await User.deleteMany({});
  await User.create(allUsers);
  res.send("DataBase Seeded with Users");
});

app.get("/clothesSeed", async (req, res) => {
  await Clothes.deleteMany({});
  await Clothes.create(allClothes);
  res.send("DataBase Seeded with Clothes");
});

app.get("/essentialsSeed", async (req, res) => {
  await Essentials.deleteMany({});
  await Essentials.create(allEssentials);
  res.send("DataBase Seeded with Essentials");
});

//Error handing middlesware
app.use(errorHandling);

//Listen
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
