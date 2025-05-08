//Imports
import express from "express";
import dotenv from "dotenv";
import connectionDB from "./db/conn.mjs";
import { errorHandling } from "./middleware/errorHandling.mjs";
import requestLog from "./middleware/requestLog.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import clothesRoutes from "./routes/userRoutes.mjs";
import essentialsRoutes from "./routes/userRoutes.mjs";
import seedRoutes from "./routes/seedRoutes.mjs"

//SetUps
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
connectionDB();

//Middleware
app.use(express.json());
app.use(requestLog);

//Routes
app.use("/api/user", userRoutes);
app.use("/api/clothes", clothesRoutes);
app.use("/api/essentials", essentialsRoutes);
app.use("/seed", seedRoutes);

//Error handing middlesware
app.use(errorHandling);

//Listen
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
