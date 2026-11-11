import { createContext, useContext, useState } from "react";
// Context avoids "prop drilling": share data with any descendant.
const ThemeContext = createContext({ theme: "light", toggle: () => {} });

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

function Panel() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className="card" style={{ background: theme === "dark" ? "#222" : "#fff", color: theme === "dark" ? "#fff" : "#000" }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggle}>toggle theme</button>
    </div>
  );
}

function Deep() { return <div><Panel /></div>; }   // no props passed down

export default function L08() {
  return (
    <ThemeProvider>
      <h1>Context</h1>
      <Deep />
      <div className="exercise">EXERCISE: create an AuthContext with user, login(name), logout() and show it in two components.</div>
    </ThemeProvider>
  );
}
