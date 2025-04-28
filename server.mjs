//Imports
import express from 'express';
import dotenv from 'dotenv';
import { errorHandling } from './middleware/errorHandling.mjs';
import connectionDB from './db/conn.mjs';
// import allAnimals from "./utilities/seedData.mjs";
// import Mammal from "./models/mammalSchema.mjs";


//SetUps
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
connectionDB();


//Middleware
app.use(express.json());

//Routes


//Seed
// app.get('/seed', async (req, res) => {
//     await Mammal.deleteMany({});
//     await Mammal.create(allAnimals);
//     res.send("DataBase Seeded")
// });

//Error handing middlesware
app.use(errorHandling);

//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
