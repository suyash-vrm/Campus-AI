import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const roles = ["student", "faculty", "staff", "researcher"];
const departments = ["Computer Science", "Mathematics", "Physics", "Data Science", "AI & Robotics", "Architecture", "Administration", "Other"];

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", email: "", password: "", confirmPassword: "",
    role: "student", department: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
          department: form.department || undefined,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed. Please try again.");
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

  const inputStyle = {
    width: "100%", padding: "11px 14px", border: "1.5px solid var(--border)",
    borderRadius: "var(--radius)", background: "var(--bg-card)", fontFamily: "var(--font)",
    fontSize: "14px", color: "var(--text-primary)", outline: "none", transition: "border-color 0.18s",
  };

  const labelStyle = {
    fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px",
    color: "var(--text-muted)", display: "block", marginBottom: "6px",
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", fontFamily: "var(--font)" }}>

      
      <div style={{
        width: "38%", background: "#111111", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: "48px 44px", color: "white", position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(240,192,48,0.06)" }} />
        <div style={{ position: "absolute", bottom: "60px", left: "-50px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(240,192,48,0.04)" }} />

        <div>
          <div style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "6px" }}>Campus Intelligence</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Unified IITR Campus Intelligence Portal</div>
        </div>

        <div>
          <div style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-yellow)", marginBottom: "14px" }}>
            Join the platform
          </div>
          <h2 style={{ fontSize: "28px", fontWeight: 800, lineHeight: 1.25, marginBottom: "18px", letterSpacing: "-0.5px" }}>
            Your entire campus<br />in one dashboard.
          </h2>
          <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "30px" }}>
            Register with your college email to get full access to the campus intelligence portal.
          </p>

          
          {[
            "🔐 Secure JWT authentication",
            "🤖 AI-powered campus assistant",
            "📊 Personalized dashboard",
            "⚡ Real-time MCP data servers",
          ].map((b) => (
            <div key={b} style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent-yellow)", flexShrink: 0 }} />
              {b}
            </div>
          ))}
        </div>

        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
          © 2026 IITR Campus Intelligence
        </div>
      </div>

      {/* ── Right: Register form ─────────────────── */}
      <div style={{
        flex: 1, background: "var(--bg-main)", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "40px", overflowY: "auto"
      }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>
          <div style={{ marginBottom: "28px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: 800, letterSpacing: "-0.5px", color: "var(--text-primary)", marginBottom: "6px" }}>
              Create your account
            </h1>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
              Use your college email to register
            </p>
          </div>

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

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name"
                  required style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = "var(--text-primary)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border)"} />
              </div>
              <div>
                <label style={labelStyle}>Role</label>
                <select name="role" value={form.role} onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}>
                  {roles.map((r) => (
                    <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="you@campus.edu" required style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--text-primary)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"} />
            </div>

            <div>
              <label style={labelStyle}>Department (Optional)</label>
              <select name="department" value={form.department} onChange={handleChange}
                style={{ ...inputStyle, color: form.department ? "var(--text-primary)" : "var(--text-muted)", cursor: "pointer" }}>
                <option value="">Select department...</option>
                {departments.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={labelStyle}>Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange}
                  placeholder="Min 6 characters" required style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = "var(--text-primary)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border)"} />
              </div>
              <div>
                <label style={labelStyle}>Confirm Password</label>
                <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}
                  placeholder="Same password" required style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = form.confirmPassword && form.password !== form.confirmPassword ? "var(--red)" : "var(--text-primary)"}
                  onBlur={(e) => e.target.style.borderColor = form.confirmPassword && form.password !== form.confirmPassword ? "var(--red)" : "var(--border)"} />
              </div>
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
                  Creating account...
                </>
              ) : "Create Account →"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "13.5px", color: "var(--text-secondary)" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "var(--text-primary)", fontWeight: 700, textDecoration: "none" }}>
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
