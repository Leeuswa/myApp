import { useState } from "react";

export default function LangSelector() {
  const [lang, setLang] = useState("한글");
  const [isDark, setIsDark] = useState(false);

  const theme = {
    background: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#000",
    padding: "20px",
    minHeight: "100vh",
  };

  return (
    <div style={theme}>
      <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
      <button onClick={() => setIsDark(!isDark)}>테마 변경</button>
      <div>
        <label>언어: </label>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="한글">한글</option>
          <option value="영어">영어</option>
        </select>
      </div>
      <p>{lang === "한글" ? "안녕하세요!" : "Hello"}</p>
    </div>
  );
}