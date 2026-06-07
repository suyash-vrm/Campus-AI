import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const token = localStorage.getItem("campus_token");
    if (!token) {
      setLoading(false);
      return;
    }

    fetch("/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        } else {
          
          localStorage.removeItem("campus_token");
        }
      })
      .catch(() => localStorage.removeItem("campus_token"))
      .finally(() => setLoading(false));
  }, []);

  function login(token, userData) {
    localStorage.setItem("campus_token", token);
    setUser(userData);
  }

  function logout() {
    localStorage.removeItem("campus_token");
    setUser(null);
  }

  function getToken() {
    return localStorage.getItem("campus_token");
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
