//Imports
import express from 'express';
import dotenv from 'dotenv';
import { errorHandling } from './middleware/errorHandling.mjs';
import connectionDB from './db/conn.mjs';
import userRoutes from "./routes/userRoutes.mjs";
import allUsers from './utilities/UserSeedData.mjs';
import User from "./models/userSchema.mjs";


//SetUps
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
connectionDB();


//Middleware
app.use(express.json());

//Routes
app.use("/api/user", userRoutes);

//Seed Data
app.get('/seed', async (req, res) => {
    // await User.deleteMany({});
    await User.create(allUsers);
    res.send("DataBase Seeded with Users")
});

//Error handing middlesware
app.use(errorHandling);

//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
