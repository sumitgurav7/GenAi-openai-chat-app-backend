import { Router, Request, Response } from "express";
import { handlePrompt } from "../services/openaiService";

const router = Router();

router.post("/", async (req: Request, res: Response): Promise<any> => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const reply = await handlePrompt(prompt);
    res.json({ reply });
  } catch (error: any) {
    console.error("Chat error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
