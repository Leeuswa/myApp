import { createContext, useContext, useState } from "react";

// 1. Context 생성
const AuthContext = createContext(null);

// 2. Provider 컴포넌트
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. 커스텀 훅 (편의용)
function useAuth() {
  return useContext(AuthContext);
}

// 4. Toolbar 컴포넌트 - props 없이 Context에서 직접 꺼냄
function Toolbar() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "10px 16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      background: "#f9f9f9",
      marginBottom: "12px",
    }}>
      {isLoggedIn ? (
        <>
          <button onClick={logout}>로그아웃</button>
          <span style={{ color: "#333" }}>환영합니다!</span>
        </>
      ) : (
        <button onClick={login}>로그인</button>
      )}
    </div>
  );
}

// 5. ContentsPage 컴포넌트
function ContentsPage() {
  return (
    <div style={{
      padding: "16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      background: "#fff",
      color: "#555",
    }}>
      Contents page
    </div>
  );
}

// 6. LandingPage - props 전달 불필요
function LandingPage() {
  return (
    <div>
      <Toolbar />
      <ContentsPage />
    </div>
  );
}

// 7. 최상위 App
export default function App() {
  return (
    <AuthProvider>
      <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "sans-serif" }}>
        <h3 style={{ marginBottom: "16px" }}>실습. 로그인 상태 툴바 (Context)</h3>
        <LandingPage />
      </div>
    </AuthProvider>
  );
}
