import { useMemo, useRef, useState, useCallback } from "react";
// useRef: mutable box that does NOT re-render; also holds DOM nodes.
// useMemo: cache an expensive computed value. useCallback: cache a function identity.
const slowSum = (n) => { let s = 0; for (let i = 0; i < n; i++) s += i; return s; };

export default function L07() {
  const inputRef = useRef(null);
  const renders = useRef(0);
  renders.current += 1;
  const [n, setN] = useState(1_000_000);
  const [other, setOther] = useState(0);

  const total = useMemo(() => slowSum(n), [n]);                 // not recomputed when `other` changes
  const inc = useCallback(() => setOther((o) => o + 1), []);

  return (
    <>
      <h1>useRef, useMemo, useCallback</h1>
      <input ref={inputRef} placeholder="I get focus from the button" />
      <button onClick={() => inputRef.current.focus()}>focus input</button>
      <p>Renders so far: {renders.current}</p>
      <p>sum(0..{n}) = {total}</p>
      <button onClick={() => setN(n + 1)}>n+1</button>
      <button onClick={inc}>other: {other}</button>
      <div className="exercise">EXERCISE: use a ref to store the previous value of a counter and display it.</div>
    </>
  );
}
