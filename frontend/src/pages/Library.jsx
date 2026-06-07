import { useState, useRef, useEffect } from "react";
import AIPanel from "../components/AIPanel";

// ── Sidebar data – updated for MGCL IIT Roorkee & Chem Engg 5th sem ─────────
const recentQueries = [
  { text: '"Process Equipment Design" – Joshi', time: "1h ago",    source: "Chemical Engg Archive" },
  { text: '"Coulson & Richardson Vol. 1A"',      time: "Yesterday", source: "STEM Reference"        },
  { text: '"Artificial Intelligence" – Russell', time: "2 days ago",source: "Digital Research Lab"  },
];

const libraryStatusData = [
  { name: "Main Reading Room",      badge: "62% CAPACITY",  badgeType: "orange" },
  { name: "Chem Engg Archive",      badge: "QUIET ZONE",    badgeType: "blue"   },
  { name: "Group Study Rooms",      badge: "AVAILABLE",     badgeType: "green"  },
  { name: "Digital Research Lab",   badge: "NEARLY FULL",   badgeType: "red"    },
  { name: "STEM Reference Section", badge: "AVAILABLE",     badgeType: "green"  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconSend = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const IconMic = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
);

const IconMap = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--border-dark)" }}>
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
);

// ── Course badge colour map ────────────────────────────────────────────────────
const courseBadgeStyle = {
  "CHC-305": { background: "#dbeafe", color: "#1d4ed8" },
  "CHC-351": { background: "#ede9fe", color: "#5b21b6" },
  "CHC-301": { background: "#d1fae5", color: "#065f46" },
  "CHT-I":   { background: "#fef3c7", color: "#92400e" },
  "CHC-303": { background: "#fee2e2", color: "#991b1b" },
  "General": { background: "#f3f4f6", color: "#374151" },
};

function CoursePill({ course }) {
  const key = Object.keys(courseBadgeStyle).find((k) => course?.includes(k)) ?? "General";
  const style = courseBadgeStyle[key];
  return (
    <span style={{ fontSize: "10px", fontWeight: 700, padding: "2px 7px", borderRadius: "99px", ...style }}>
      {key}
    </span>
  );
}

// ── Book result card ──────────────────────────────────────────────────────────
function BookResultCard({ book }) {
  if (!book) return null;
  const inStock = book.availableCopies > 0;
  return (
    <div className="book-result fade-in">
      <div className="book-result__availability">
        <div>
          <div className="book-result__avail-label" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            Live Availability — MGCL
            <span className={`badge badge--${inStock ? "green" : "red"}`} style={{ fontSize: "9px" }}>
              {inStock ? "● IN STOCK" : "● UNAVAILABLE"}
            </span>
          </div>
          <div className="book-result__avail-count">
            {book.availableCopies} / {book.totalCopies} Copies
          </div>
          <div className="book-result__avail-sub">Waitlist: {book.waitlistCount} users</div>
          {book.course && (
            <div style={{ marginTop: "6px" }}>
              <CoursePill course={book.course} />
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <div>
            <div className="book-result__avail-label">Physical Location</div>
            <div className="book-result__loc-row">
              <span className="book-result__loc-key">Floor</span>
              <span className="book-result__loc-val">{book.location.floor}</span>
            </div>
            <div className="book-result__loc-row">
              <span className="book-result__loc-key">Shelf</span>
              <span className="book-result__loc-val" style={{ fontFamily: "monospace", fontSize: "11px" }}>
                {book.location.shelf}
              </span>
            </div>
          </div>
          <IconMap />
        </div>
      </div>
      <div className="book-result__actions">
        <button className="btn btn--primary btn--sm">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
          </svg>
          Reserve Copy
        </button>
        <button className="btn btn--outline btn--sm">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="3 11 22 2 13 21 11 13 3 11"/>
          </svg>
          Navigate Me
        </button>
        <button className="btn btn--outline btn--sm">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          Digital Preview
        </button>
      </div>
    </div>
  );
}

// ── Server badge ──────────────────────────────────────────────────────────────
const serverColors = {
  library:   { bg: "var(--blue-bg)",          color: "var(--blue)",             label: "MGCL Library"   },
  events:    { bg: "var(--accent-yellow-bg)", color: "var(--accent-yellow-dark)",label: "Events"         },
  cafeteria: { bg: "var(--green-bg)",         color: "var(--green)",            label: "Cafeteria"      },
  academics: { bg: "var(--orange-bg)",        color: "var(--orange)",           label: "Academics"      },
};

function ServerBadge({ server }) {
  const cfg = serverColors[server] || { bg: "var(--bg-tag)", color: "var(--text-muted)", label: server };
  return (
    <span style={{ padding: "2px 7px", borderRadius: "4px", fontSize: "10px", fontWeight: 700,
      background: cfg.bg, color: cfg.color }}>
      {cfg.label}
    </span>
  );
}

// ── Demo data ─────────────────────────────────────────────────────────────────
const DEMO_QUERY = 'Is "Process Equipment Design" by Joshi available?';
const DEMO_BOOK  = {
  title: "Process Equipment Design",
  author: "M. V. Joshi",
  totalCopies: 8,
  availableCopies: 5,
  waitlistCount: 0,
  course: "CHC-305",
  location: { floor: "Level 3", shelf: "TP.157.J67" },
};

// ── Main component ────────────────────────────────────────────────────────────
export default function Library() {
  const [messages, setMessages] = useState([
    { role: "user", content: DEMO_QUERY },
    {
      role: "ai",
      content: `Searching MGCL catalogue... Found **"Process Equipment Design"** by M. V. Joshi.\n\nThis is the primary reference for **CHC-305 Process Equipment Design** (5th sem). 5 copies are currently available on Level 3.`,
      servers: ["library"],
      book: DEMO_BOOK,
    },
  ]);
  const [input,    setInput]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const [mcpNode,  setMcpNode]  = useState("MGCL-Core-01");
  const [latency,  setLatency]  = useState(38);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput("");

    const history = messages.map((m) => ({
      role: m.role === "user" ? "user" : "assistant",
      content: m.content,
    }));
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("campus_token") || ""}`,
        },
        body: JSON.stringify({ message: msg, history }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");

      let bookData = null;
      if (data.toolCalls) {
        const bookCall = data.toolCalls.find(
          (c) => c.tool === "check_book_availability" && c.result?.found
        );
        if (bookCall) bookData = bookCall.result.book;
      }

      setMessages((prev) => [
        ...prev,
        { role: "ai", content: data.answer, servers: data.serversQueried, book: bookData },
      ]);
      if (data.mcpNode) setMcpNode(data.mcpNode);
      if (data.latency) setLatency(data.latency);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: `⚠️ ${err.message}`, servers: [] },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <div style={{ display: "flex", height: "calc(100vh - var(--header-height))", overflow: "hidden" }}>

      {/* ── Left Sidebar ── */}
      <div style={{ width: "220px", flexShrink: 0, padding: "20px 16px", borderRight: "1px solid var(--border)",
        overflowY: "auto", background: "var(--bg-sidebar)" }}>

        {/* MGCL branding strip */}
        <div style={{ background: "var(--bg-input)", border: "1px solid var(--border)", borderRadius: "8px",
          padding: "10px 12px", marginBottom: "14px" }}>
          <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.06em", color: "var(--text-secondary)",
            textTransform: "uppercase", marginBottom: "2px" }}>MGCL · IIT Roorkee</div>
          <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>Est. 1848 · 3,50,000+ docs</div>
          <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>Open 8 AM – 10 PM</div>
        </div>

        <div className="section-divider" style={{ paddingTop: 0 }}>Recent Queries</div>
        {recentQueries.map((q, i) => (
          <button key={i} style={{ width: "100%", textAlign: "left", border: "1px solid var(--border)",
            background: "var(--bg-input)", padding: "10px 12px", borderRadius: "var(--radius)",
            cursor: "pointer", marginBottom: "6px", transition: "all 0.18s", fontFamily: "var(--font)" }}
            onClick={() => sendMessage(q.text.replace(/"/g, ""))}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-tag)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--bg-input)"}
          >
            <div style={{ fontSize: "12.5px", fontWeight: 600, color: "var(--text-primary)" }}>{q.text}</div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "3px" }}>
              {q.time} · {q.source}
            </div>
          </button>
        ))}

        <div className="section-divider" style={{ marginTop: "16px" }}>Section Status</div>
        {libraryStatusData.map((item, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
            <span style={{ fontSize: "12px", color: "var(--text-primary)", fontWeight: 500 }}>{item.name}</span>
            <span className={`badge badge--${item.badgeType}`} style={{ fontSize: "9px" }}>{item.badge}</span>
          </div>
        ))}

        {/* Quick course-book shortcuts */}
        <div className="section-divider" style={{ marginTop: "16px" }}>5th Sem Books</div>
        {["CHC-305", "CHC-351", "CHC-301", "CHT-I", "CHC-303"].map((code) => (
          <button key={code}
            style={{ width: "100%", textAlign: "left", border: "1px solid var(--border)",
              background: "var(--bg-input)", padding: "8px 12px", borderRadius: "var(--radius)",
              cursor: "pointer", marginBottom: "5px", fontFamily: "var(--font)", transition: "all 0.18s" }}
            onClick={() => sendMessage(`Show me books for ${code}`)}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-tag)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--bg-input)"}
          >
            <CoursePill course={code} />
            <span style={{ fontSize: "11px", color: "var(--text-muted)", marginLeft: "6px" }}>
              {code === "CHC-305" ? "Process Equip. Design"
                : code === "CHC-351" ? "AI/ML"
                : code === "CHC-301" ? "Computer Applications"
                : code === "CHT-I"   ? "Talent Enhancement"
                :                      "Chem Engg Lab-III"}
            </span>
          </button>
        ))}
      </div>

      {/* ── Main Chat Area ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px", display: "flex",
          flexDirection: "column", gap: "16px" }}>
          {messages.map((msg, i) => (
            <div key={i} className="fade-in" style={{ display: "flex", flexDirection: "column",
              alignItems: msg.role === "user" ? "flex-end" : "flex-start", maxWidth: "100%" }}>

              <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--text-muted)",
                textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px",
                textAlign: msg.role === "user" ? "right" : "left" }}>
                {msg.role === "user" ? "You" : "MGCL Assistant"}
              </div>

              {msg.role === "user" ? (
                <div style={{ background: "var(--bg-tag)", border: "1px solid var(--border)",
                  borderRadius: "8px 8px 2px 8px", padding: "10px 16px", fontSize: "13.5px",
                  color: "var(--text-primary)", maxWidth: "60%" }}>
                  {msg.content}
                </div>
              ) : (
                <div style={{ maxWidth: "100%", width: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"
                      style={{ color: "var(--accent-yellow-dark)" }}>
                      <path d="M12 1l2.5 7.5L22 11l-7.5 2.5L12 21l-2.5-7.5L2 11l7.5-2.5z"/>
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)" }}>
                      MGCL Library Assistant
                    </span>
                  </div>

                  <div style={{ fontSize: "13.5px", color: "var(--text-primary)", lineHeight: 1.6,
                    whiteSpace: "pre-wrap" }}>
                    {msg.content.split("**").map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                    )}
                  </div>

                  {msg.book && <BookResultCard book={msg.book} />}

                  {msg.servers?.length > 0 && (
                    <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
                      {msg.servers.map((s) => <ServerBadge key={s} server={s} />)}
                    </div>
                  )}

                  {!msg.book && msg.role === "ai" && (
                    <div style={{ marginTop: "12px", padding: "10px 14px", background: "var(--bg-input)",
                      border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "12px",
                      color: "var(--text-muted)", fontStyle: "italic" }}>
                      💡 Tip: Ask "books for CHC-305" or "is Perry's Handbook available?" to search the MGCL catalogue
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)",
              fontSize: "12px", fontStyle: "italic" }}>
              <div className="spinner" />
              Querying MGCL Database...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input bar */}
        <div style={{ padding: "12px 20px", borderTop: "1px solid var(--border)", background: "var(--bg-sidebar)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "var(--bg-input)",
            border: "1px solid var(--border)", borderRadius: "24px", padding: "8px 14px" }}>
            <input
              type="text"
              placeholder="Search MGCL catalogue, check availability, ask about e-resources..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              disabled={loading}
              style={{ flex: 1, border: "none", background: "transparent", fontFamily: "var(--font)",
                fontSize: "13px", color: "var(--text-primary)", outline: "none" }}
            />
            <button style={{ background: "none", border: "none", cursor: "pointer",
              color: "var(--text-muted)", display: "flex" }}>
              <IconMic />
            </button>
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{ width: "32px", height: "32px", display: "flex", alignItems: "center",
                justifyContent: "center", background: "#111", color: "#fff", border: "none",
                borderRadius: "50%", cursor: input.trim() ? "pointer" : "default",
                transition: "background 0.18s", flexShrink: 0 }}
            >
              <IconSend />
            </button>
          </div>

          {/* MCP status bar */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "6px", paddingLeft: "4px" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ color: "var(--text-muted)" }}>
              <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
              <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
            </svg>
            <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>MCP Node: {mcpNode}</span>
            <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>⚡ {latency}ms</span>
            <span style={{ fontSize: "10px", color: "var(--text-muted)", marginLeft: "auto" }}>
              MGCL · IIT Roorkee · mgcl.iitr.ac.in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}