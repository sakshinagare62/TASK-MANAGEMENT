import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import n from "node:dns/promises";
import cors from "cors";

n.setServers(["1.1.1.1","8.8.8.8"])

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json());


app.use("/task", taskRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/task`);
});