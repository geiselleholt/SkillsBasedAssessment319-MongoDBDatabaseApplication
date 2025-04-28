//Imports
import express from 'express';
import dotenv from 'dotenv';
import { errorHandling } from './middleware/errorHandling.mjs';
import connectionDB from './db/conn.mjs';


//SetUps
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
connectionDB();


//Middleware
app.use(express.json());

//Routes


//Error handing middlesware
app.use(errorHandling);

//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
