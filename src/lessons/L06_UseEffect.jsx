import { useEffect, useState } from "react";
// useEffect(fn, deps): runs AFTER render. [] = once; [x] = when x changes; none = every render.
// Return a cleanup function for timers/subscriptions/listeners.
function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);                       // cleanup on unmount
  }, []);
  return <p>{now.toLocaleTimeString()}</p>;
}

export default function L06() {
  const [id, setId] = useState(1);
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let cancelled = false;                                  // avoid setting state after unmount / stale response
    setLoading(true);
    setError(null);
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((r) => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then((d) => !cancelled && setTodo(d))
      .catch((e) => !cancelled && setError(e.message))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, [id]);

  useEffect(() => { document.title = `Todo ${id}`; }, [id]);

  return (
    <>
      <h1>useEffect & fetch</h1>
      <button onClick={() => setShow(!show)}>toggle clock</button>
      {show && <Clock />}
      <button onClick={() => setId((i) => Math.max(1, i - 1))}>prev</button>
      <button onClick={() => setId((i) => i + 1)}>next</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {todo && <pre>{JSON.stringify(todo, null, 2)}</pre>}
      <div className="exercise">EXERCISE: fetch /users and show a list; add a search box that filters it.</div>
    </>
  );
}
