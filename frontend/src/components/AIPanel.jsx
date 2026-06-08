import { useState, useRef, useEffect } from "react";

function getToken() {
  return localStorage.getItem("campus_token") || "";
}

const IconSparkle = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--accent-yellow-dark)" }}>
    <path d="M12 1l2.5 7.5L22 11l-7.5 2.5L12 21l-2.5-7.5L2 11l7.5-2.5z"/>
  </svg>
);

const IconSend = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const IconMic = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
);

const serverColors = {
  library: { bg: "var(--blue-bg)", color: "var(--blue)", label: "Library" },
  events: { bg: "var(--accent-yellow-bg)", color: "var(--accent-yellow-dark)", label: "Events" },
  cafeteria: { bg: "var(--green-bg)", color: "var(--green)", label: "Cafeteria" },
  academics: { bg: "var(--orange-bg)", color: "var(--orange)", label: "Academics" },
};

function ServerBadge({ server }) {
  const cfg = serverColors[server] || { bg: "var(--bg-tag)", color: "var(--text-muted)", label: server };
  return (
    <span style={{ padding: "2px 7px", borderRadius: "4px", fontSize: "10px", fontWeight: 700, background: cfg.bg, color: cfg.color, letterSpacing: "0.5px" }}>
      {cfg.label}
    </span>
  );
}

export default function AIPanel({ title = "AI Assistant", placeholder = "Ask anything...", suggestions = [], context = "general", panelStyle = {} }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mcpNode, setMcpNode] = useState(null);
  const [latency, setLatency] = useState(null);
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
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ message: msg, history }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error");

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: data.answer,
          servers: data.serversQueried,
        },
      ]);
      if (data.mcpNode) setMcpNode(data.mcpNode);
      if (data.latency) setLatency(data.latency);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: `⚠️ ${err.message || "Failed to process query. Please try again."}`, servers: [] },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="ai-panel" style={panelStyle}>
      <div className="ai-panel__header">
        <IconSparkle />
        <span className="ai-panel__title">{title}</span>
      </div>

      <div className="ai-panel__messages">
        {messages.length === 0 && (
          <div style={{ textAlign: "center", padding: "24px 12px", color: "var(--text-muted)" }}>
            <div style={{ fontSize: "22px", marginBottom: "8px" }}>✨</div>
            <div style={{ fontSize: "13px", fontWeight: 600 }}>Ask me anything</div>
            <div style={{ fontSize: "12px", marginTop: "4px" }}>I have access to live campus data</div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg chat-msg--${msg.role} fade-in`}>
            <div className="chat-msg__label">
              {msg.role === "user" ? "User Query" : "AI Response"}
            </div>
            <div className="chat-msg__bubble">
              {msg.content}
            </div>
            {msg.role === "ai" && msg.servers?.length > 0 && (
              <div className="chat-msg__servers">
                {msg.servers.map((s) => <ServerBadge key={s} server={s} />)}
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="ai-thinking fade-in">
            <div className="spinner" />
            Querying campus systems...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {suggestions.length > 0 && messages.length === 0 && (
        <div className="suggestions">
          {suggestions.map((s) => (
            <button key={s} className="suggestion-chip" onClick={() => sendMessage(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="ai-panel__input">
        <div className="ai-panel__input-row">
          <input
            type="text"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
          />
          <IconMic style={{ color: "var(--text-muted)", cursor: "pointer" }} />
          <button className="ai-panel__send" onClick={() => sendMessage()} disabled={loading || !input.trim()}>
            <IconSend />
          </button>
        </div>
      </div>

      {(mcpNode || latency) && (
        <div className="ai-panel__footer">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--text-muted)" }}>
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
            <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
          </svg>
          {mcpNode && <span className="ai-panel__footer-text">MCP Node: {mcpNode}</span>}
          {latency && (
            <>
              <span className="ai-panel__footer-text" style={{ margin: "0 3px" }}>⚡</span>
              <span className="ai-panel__footer-text">Latency: {latency}ms</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
