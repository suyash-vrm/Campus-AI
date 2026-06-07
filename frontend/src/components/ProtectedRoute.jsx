import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Show nothing while we verify the stored token
  if (loading) {
    return (
      <div style={{
        height: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "var(--bg-main)", flexDirection: "column", gap: "12px"
      }}>
        <div className="spinner" style={{ width: "24px", height: "24px", borderWidth: "3px" }} />
        <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>Loading Campus Intelligence...</span>
      </div>
    );
  }

  // Not logged in → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
