import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { processQuery } from "./routes/ai.js";
import authRouter from "./routes/auth.js";
import { requireAuth } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: [
    "https://campus-ai-frontend-2-66s7b8i4e-suyash-vrms-projects.vercel.app",
    "http://localhost:5173"
  ],
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"]
}));
app.use(express.json());


app.use("/api/auth", authRouter);


app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    servers: ["library", "events", "cafeteria", "academics"],
    timestamp: new Date().toISOString(),
  });
});

app.post("/api/query", requireAuth, async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({ error: "Message is required." });
    }

    const result = await processQuery(message, history);
    res.json(result);
  } catch (err) {
    console.error("Query error:", err.message);
    const isRateLimit = err.message?.includes("429") || err.message?.toLowerCase().includes("rate limit");
    res.status(500).json({
      error: isRateLimit
        ? "Rate limit hit — please wait a moment and try again."
        : "Failed to process query.",
      details: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 CampusAI Backend running on http://localhost:${PORT}`);
  console.log(`🔐 Auth: JWT (register + login + protected routes)`);
  console.log(`📚 Library MCP Server: active`);
  console.log(`🎉 Events MCP Server: active`);
  console.log(`🍽️  Cafeteria MCP Server: active`);
  console.log(`📖 Academics MCP Server: active\n`);
});
