import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const pageTitles = {
  "/dashboard": "Global University Search...",
  "/library": "Search books, authors, topics...",
  "/cafeteria": "Search menu items...",
  "/events": "Search policies or events...",
  "/academics": "Search policies or events...",
};

const IconSearch = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconBell = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const IconLogout = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const placeholder = pageTitles[location.pathname] || "Search...";
  const [query, setQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  // Get user's initials for avatar
  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
    : "U";

  const roleColors = {
    student: { bg: "var(--blue-bg)", color: "var(--blue)" },
    faculty: { bg: "var(--accent-yellow-bg)", color: "var(--accent-yellow-dark)" },
    staff: { bg: "var(--green-bg)", color: "var(--green)" },
    researcher: { bg: "var(--orange-bg)", color: "var(--orange)" },
  };
  const roleStyle = roleColors[user?.role] || roleColors.student;

  return (
    <header className="header" style={{ position: "relative" }}>
      <div className="header__search">
        <IconSearch />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="header__actions">
        <button className="header__icon-btn" title="Notifications">
          <IconBell />
        </button>

        {/* User avatar + dropdown */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowMenu((v) => !v)}
            title={user?.name || "Profile"}
            style={{
              display: "flex", alignItems: "center", gap: "8px", padding: "5px 10px 5px 5px",
              background: "var(--bg-input)", border: "1px solid var(--border)", borderRadius: "20px",
              cursor: "pointer", transition: "all 0.18s", fontFamily: "var(--font)"
            }}
          >
            {/* Avatar circle */}
            <div style={{
              width: "26px", height: "26px", borderRadius: "50%", background: "#111",
              color: "white", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px", flexShrink: 0
            }}>
              {initials}
            </div>
            {/* Name + role */}
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "12.5px", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>
                {user?.name?.split(" ")[0] || "User"}
              </div>
              <div style={{ fontSize: "10px", fontWeight: 600, ...roleStyle, padding: "0 4px", borderRadius: "3px", display: "inline-block", marginTop: "1px" }}>
                {user?.role || "student"}
              </div>
            </div>
          </button>

          {/* Dropdown menu */}
          {showMenu && (
            <>
              <div onClick={() => setShowMenu(false)} style={{ position: "fixed", inset: 0, zIndex: 99 }} />
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 100,
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-lg)", minWidth: "220px", overflow: "hidden"
              }}>
                {/* User info header */}
                <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)", background: "var(--bg-input)" }}>
                  <div style={{ fontSize: "13.5px", fontWeight: 700, color: "var(--text-primary)" }}>{user?.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>{user?.email}</div>
                  {user?.department && (
                    <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "3px" }}>📍 {user.department}</div>
                  )}
                </div>

                {/* Menu items */}
                <div style={{ padding: "6px" }}>
                  <button onClick={handleLogout} style={{
                    width: "100%", display: "flex", alignItems: "center", gap: "8px",
                    padding: "9px 12px", border: "none", background: "transparent",
                    fontFamily: "var(--font)", fontSize: "13px", fontWeight: 600,
                    color: "var(--red)", cursor: "pointer", borderRadius: "var(--radius)", transition: "background 0.18s"
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "var(--red-bg)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <IconLogout />
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
