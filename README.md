# 🎓 Campus AI — Unified Campus Intelligence Dashboard

> An AI-powered web dashboard that lets students query all campus systems — library, cafeteria, events, and academics — through a single natural language interface, powered by independent MCP Servers and a live LLM with function-calling.

**🔗 Live Demo:** [campus-ai-frontend-2.vercel.app](https://campus-ai-frontend-2.vercel.app)

---

## 📌 The Problem

College campuses have data scattered everywhere — the library uses one portal, the cafeteria menu is a PDF, club events are on Google Calendar, and academic handbooks are massive documents. Students waste time digging through 4–5 different systems just to find basic information.

## 💡 The Solution

Campus AI is a **Unified Web Dashboard** with an embedded AI assistant. Instead of scraping and dumping everything into one giant database, each campus data source has its own **independent MCP (Model Context Protocol) Server**. The AI dynamically routes queries to the right server(s) in real-time based on what the student asks — including multi-server queries that span multiple campus systems in a single response.

---

## ✨ Features

- **AI Assistant on every page** — ask anything in natural language, get answers sourced from live campus data
- **4 Independent MCP Servers** — Library, Cafeteria, Events, Academics each run as isolated data modules
- **Smart query routing** — the LLM automatically decides which MCP server(s) to call using function-calling
- **Multi-server queries** — one question can query multiple campus systems simultaneously (e.g. "What's for dinner and are there any events tonight?")
- **Server badges** — every AI response shows which MCP server(s) were queried
- **Latency indicator** — real-time display of query processing time
- **Semester progress tracker** — live semester timeline with MTE/ETE countdowns on the dashboard
- **JWT Authentication** — secure register/login with protected routes
- **Conversation history** — multi-turn chat with full context carried across messages
- **Dedicated pages** per campus system with rich UI (book availability, mess menu, event listings, academic calendar)

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                   React Frontend                     │
│   Dashboard | Library | Cafeteria | Events | Academics│
│              + AIPanel (on every page)               │
└──────────────────────┬──────────────────────────────┘
                       │ POST /api/query
┌──────────────────────▼──────────────────────────────┐
│              Node.js / Express Backend               │
│                                                      │
│   ┌──────────────────────────────────────────────┐  │
│   │         AI Router  (routes/ai.js)            │  │
│   │   Groq API · llama-3.3-70b · function-calling│  │
│   │        Agentic tool-calling loop             │  │
│   └──┬──────────┬──────────┬──────────┬──────────┘  │
│      │          │          │          │              │
│  ┌───▼──┐  ┌───▼──┐  ┌───▼──┐  ┌───▼──────┐       │
│  │Library│  │Events│  │Cafetr│  │Academics │       │
│  │  MCP  │  │  MCP │  │  MCP │  │   MCP    │       │
│  └───────┘  └──────┘  └──────┘  └──────────┘       │
└─────────────────────────────────────────────────────┘
```

Each MCP server is completely independent — it owns its own data, tools, and query logic. There is no shared or central database.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6, Vite |
| Backend | Node.js, Express.js |
| AI / LLM | Groq API — `llama-3.3-70b-versatile` |
| AI Protocol | Function-calling (tool use) with agentic loop |
| Auth | JWT (jsonwebtoken + bcryptjs) |
| Frontend Hosting | Vercel |
| Backend Hosting | Render / Railway |

---

## 📁 Project Structure

```
campus-ai/
├── frontend/                  # React + Vite app
│   └── src/
│       ├── components/
│       │   ├── AIPanel.jsx    # AI chat interface (embedded on all pages)
│       │   ├── Layout.jsx
│       │   ├── Header.jsx
│       │   ├── Sidebar.jsx
│       │   └── ProtectedRoute.jsx
│       ├── pages/
│       │   ├── Dashboard.jsx  # Semester tracker, quick stats
│       │   ├── Library.jsx    # Book search & availability
│       │   ├── Cafeteria.jsx  # Mess menu by bhawan & meal
│       │   ├── Events.jsx     # Academic calendar & fests
│       │   └── Academics.jsx  # Handbooks, policies, exam schedule
│       └── context/
│           └── AuthContext.jsx
│
└── backend/                   # Node.js Express API
    ├── server.js              # Entry point
    ├── routes/
    │   ├── ai.js              # Query processor + tool-calling loop
    │   └── auth.js            # Register / Login
    ├── middleware/
    │   └── authMiddleware.js  # JWT verification
    ├── mcp-servers/           # Independent MCP data servers
    │   ├── library.js         # Book data, search tools, availability
    │   ├── cafeteria.js       # Mess menu, bhawan timings, dietary info
    │   ├── events.js          # Academic calendar, fests, deadlines
    │   └── academics.js       # Handbooks, policies, exam schedule
    └── db/
        └── userStore.js       # In-memory user store (JWT auth)
```

---

## 🤖 MCP Servers

### 📚 Library MCP
- Search books by title, author, course code, or keyword
- Check real-time availability and copy counts
- Get shelf location (floor + call number)
- Find similar books and waitlist info

### 🍽️ Cafeteria MCP
- Today's full menu for all bhawans (Ravindra, Cautley, etc.)
- Meals by type: breakfast, lunch, snacks, dinner
- Mess timings per bhawan
- Dietary information (halal, vegan, allergen tags)

### 🎉 Events MCP
- Full academic calendar (IIT Roorkee 2026–27)
- Upcoming fests: Thomso, Sangram, Convocation
- Exam schedule: MTE and ETE dates
- Registration deadlines and important academic dates

### 📖 Academics MCP
- Graduate Handbook sections and policies
- Academic integrity and conduct rules
- Attendance requirements and procedures
- Thesis submission guidelines

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A [Groq API key](https://console.groq.com) (free tier available)

### 1. Clone the repository

```bash
git clone https://github.com/suyash-vrm/Campus-AI.git
cd Campus-AI
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
GROQ_API_KEY=your_groq_api_key_here
JWT_SECRET=your_jwt_secret_here
PORT=3001
```

Start the backend:

```bash
npm run dev        # development (with nodemon)
# or
npm start          # production
```

The backend will start on `http://localhost:3001` with all 4 MCP servers active.

### 3. Set up the Frontend

```bash
cd ../frontend
npm install
```

The frontend proxies `/api` requests to the backend via `vite.config.js`. No extra config needed for local development.

Start the frontend:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 4. Register and start querying

- Go to `/register` to create an account
- Log in at `/login`
- You'll be redirected to the Dashboard
- Use the AI panel on any page to ask questions

---

## 💬 Example Queries

```
"Is Process Equipment Design available in the library? Where is it?"

"What's for dinner tonight at Ravindra Bhawan?"

"When are the mid-term exams and how many days are left?"

"What's the attendance policy from the graduate handbook?"

"Are there any events this week? Also what's for lunch today?"  ← multi-server query
```

---

## 🔌 API Reference

### `POST /api/query` *(Protected)*

Processes a natural language query through the AI and MCP servers.

**Headers:**
```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Request body:**
```json
{
  "message": "What books are available for CHC-305?",
  "history": []
}
```

**Response:**
```json
{
  "answer": "Here are the available books for CHC-305...",
  "serversQueried": ["library"],
  "toolCalls": [...],
  "latency": 1243,
  "mcpNode": "Library-Core-01"
}
```

### `POST /api/auth/register`
### `POST /api/auth/login`
### `GET /api/health`

---

## 🔐 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `GROQ_API_KEY` | Groq API key for LLM access | ✅ |
| `JWT_SECRET` | Secret key for JWT signing | ✅ |
| `PORT` | Backend port (default: 3001) | ❌ |

---

## 📦 Deployment

### Frontend — Vercel
```bash
cd frontend
npm run build
# deploy dist/ to Vercel
```

### Backend — Render / Railway
- Set environment variables (`GROQ_API_KEY`, `JWT_SECRET`) in the platform dashboard
- Start command: `npm start`
- Make sure the frontend's API proxy or base URL points to your deployed backend URL

---

## 🧑‍💻 Built With

- [Groq](https://groq.com) — ultra-fast LLM inference
- [Meta Llama 3.3 70B](https://ai.meta.com/blog/meta-llama-3/) — the LLM powering query understanding and tool selection
- [React](https://react.dev) — frontend UI
- [Express](https://expressjs.com) — backend API
- [Vite](https://vitejs.dev) — frontend build tool

---

## 📄 License

MIT License — feel free to use, modify, and build on this project.

---

*Built for the Web Development track — Part II, Problem Statement 01: Unified Campus Intelligence Dashboard with AI Assistant.*
