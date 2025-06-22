import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chat";


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Correct usage of router
app.use("/api/chat", chatRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
