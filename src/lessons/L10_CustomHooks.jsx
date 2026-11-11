import { useEffect, useState } from "react";
// A custom hook = a function starting with "use" that calls other hooks. Reuses LOGIC, not UI.
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; } catch { return initial; }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage blocked */ }
  }, [key, value]);
  return [value, setValue];
}

function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  return [on, () => setOn((o) => !o)];
}

function useDebounce(value, ms = 400) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setV(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);
  return v;
}

export default function L10() {
  const [name, setName] = useLocalStorage("lr-name", "");
  const [open, toggle] = useToggle();
  const [q, setQ] = useState("");
  const debounced = useDebounce(q);
  return (
    <>
      <h1>Custom hooks</h1>
      <input placeholder="Name (saved in localStorage)" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name || "stranger"} (refresh the page, it stays)</p>
      <button onClick={toggle}>{open ? "hide" : "show"}</button>
      {open && <p>Toggled content</p>}
      <input placeholder="Type fast..." value={q} onChange={(e) => setQ(e.target.value)} />
      <p>live: {q} | debounced: {debounced}</p>
      <div className="exercise">EXERCISE: write useFetch(url) returning {"{ data, loading, error }"}.</div>
    </>
  );
}
