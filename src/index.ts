import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat";

dotenv.config();
console.log("OpenAI Key Loaded?", process.env.OPENAI_API_KEY ? true : false);


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Correct usage of router
app.use("/api/chat", chatRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
