import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed. Please try again.");
        return;
      }

      login(data.token, data.user);
      navigate("/dashboard", { replace: true });
    } catch {
      setError("Network error. Make sure the backend server is running.");
    } finally {
      setLoading(false);
    }
  }

  
  function fillDemo() {
    setForm({ email: "demo@campus.edu", password: "demo123" });
    setError("");
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", fontFamily: "var(--font)" }}>

      {}
      <div style={{
        width: "42%", background: "#111111", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: "48px 44px", color: "white", position: "relative", overflow: "hidden"
      }}>
        
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(240,192,48,0.06)" }} />
        <div style={{ position: "absolute", bottom: "40px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(240,192,48,0.04)" }} />

        
        <div>
          <div style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "6px" }}>Campus Intelligence</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Unified IITR Intelligence Portal</div>
        </div>

        
        <div>
          <div style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-yellow)", marginBottom: "16px" }}>
            your go to portal.
          </div>
          <h2 style={{ fontSize: "30px", fontWeight: 800, lineHeight: 1.25, marginBottom: "24px", letterSpacing: "-0.5px" }}>
            Everything campus.<br />All in one place.
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "320px" }}>
            Access library books, cafeteria menus, campus events, and academic resources — all at one place.
          </p>

          {/* Feature list */}
          {[
            { icon: "📚", label: "Library", desc: "Real-time book availability & search" },
            { icon: "🍽️", label: "Cafeteria", desc: "Daily menus with dietary info" },
            { icon: "🎉", label: "Events", desc: "Workshops, seminars & tech fests" },
            { icon: "🎓", label: "Academics", desc: "Handbooks, policies & exam schedules" },
          ].map((f) => (
            <div key={f.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "8px", background: "rgba(240,192,48,0.12)",
                border: "1px solid rgba(240,192,48,0.2)", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", flexShrink: 0
              }}>{f.icon}</div>
              <div>
                <div style={{ fontSize: "13.5px", fontWeight: 700, color: "white" }}>{f.label}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "1px" }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
          © 2026 IITR Campus Intelligence
        </div>
      </div>

      
      <div style={{
        flex: 1, background: "var(--bg-main)", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "40px"
      }}>
        <div style={{ width: "100%", maxWidth: "400px" }}>

          {/* Header */}
          <div style={{ marginBottom: "36px" }}>
            <h1 style={{ fontSize: "26px", fontWeight: 800, letterSpacing: "-0.5px", color: "var(--text-primary)", marginBottom: "6px" }}>
              Welcome back 👋
            </h1>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
              Sign in to access your campus portal
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div style={{
              padding: "10px 14px", borderRadius: "var(--radius)", background: "var(--red-bg)",
              border: "1px solid var(--red)", color: "var(--red)", fontSize: "13px", marginBottom: "20px",
              display: "flex", alignItems: "center", gap: "8px"
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div>
              <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@campus.edu"
                required
                autoFocus
                style={{
                  width: "100%", padding: "11px 14px", border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius)", background: "var(--bg-card)", fontFamily: "var(--font)",
                  fontSize: "14px", color: "var(--text-primary)", outline: "none", transition: "border-color 0.18s"
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--text-primary)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
            </div>

            <div>
              <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                style={{
                  width: "100%", padding: "11px 14px", border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius)", background: "var(--bg-card)", fontFamily: "var(--font)",
                  fontSize: "14px", color: "var(--text-primary)", outline: "none", transition: "border-color 0.18s"
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--text-primary)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", padding: "12px", background: "#111111", color: "white",
                border: "none", borderRadius: "var(--radius)", fontFamily: "var(--font)",
                fontSize: "14px", fontWeight: 700, cursor: loading ? "default" : "pointer",
                opacity: loading ? 0.7 : 1, transition: "all 0.18s", display: "flex",
                alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "4px"
              }}
            >
              {loading ? (
                <>
                  <div className="spinner" style={{ borderTopColor: "white", borderColor: "rgba(255,255,255,0.3)" }} />
                  Signing in...
                </>
              ) : "Sign In →"}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "20px 0" }}>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>or</span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          {/* Demo button */}
          <button
            type="button"
            onClick={fillDemo}
            style={{
              width: "100%", padding: "11px", background: "var(--bg-card)", color: "var(--text-primary)",
              border: "1.5px solid var(--border)", borderRadius: "var(--radius)", fontFamily: "var(--font)",
              fontSize: "13.5px", fontWeight: 600, cursor: "pointer", transition: "all 0.18s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-yellow-bg)"; e.currentTarget.style.borderColor = "var(--accent-yellow)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--bg-card)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            ✨ Fill Demo Credentials
          </button>

          {/* Register link */}
          <p style={{ textAlign: "center", marginTop: "24px", fontSize: "13.5px", color: "var(--text-secondary)" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "var(--text-primary)", fontWeight: 700, textDecoration: "none" }}>
              Create one →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
