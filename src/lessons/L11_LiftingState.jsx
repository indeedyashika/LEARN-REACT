import { useState } from "react";
// When two siblings need the same data, move state UP to their closest common parent.
function TempInput({ label, value, onChange }) {
  return (
    <label>{label}: <input type="number" value={value} onChange={(e) => onChange(e.target.value)} /></label>
  );
}

export default function L11() {
  const [celsius, setCelsius] = useState("0");
  const toF = (c) => (c === "" ? "" : String(+(c * 9 / 5 + 32).toFixed(2)));
  const toC = (f) => (f === "" ? "" : String(+((f - 32) * 5 / 9).toFixed(2)));
  return (
    <>
      <h1>Lifting state up</h1>
      <div><TempInput label="Celsius" value={celsius} onChange={setCelsius} /></div>
      <div><TempInput label="Fahrenheit" value={toF(celsius)} onChange={(f) => setCelsius(toC(f))} /></div>
      <p>One source of truth (celsius) in the parent; Fahrenheit is derived.</p>
      <div className="exercise">EXERCISE: build a shopping cart where ProductList and CartSummary share cart state.</div>
    </>
  );
}
