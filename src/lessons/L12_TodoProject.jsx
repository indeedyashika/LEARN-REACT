import { useEffect, useMemo, useState } from "react";
// PROJECT: Todo app combining state, forms, lists, effects, localStorage, derived data.
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
      <span className={"todo" + (todo.done ? " done" : "")}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>delete</button>
    </li>
  );
}

export default function L12() {
  const [todos, setTodos] = useState(() => {
    try { return JSON.parse(localStorage.getItem("lr-todos")) ?? []; } catch { return []; }
  });
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try { localStorage.setItem("lr-todos", JSON.stringify(todos)); } catch { /* ignore */ }
  }, [todos]);

  const add = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text: text.trim(), done: false }]);
    setText("");
  };
  const toggle = (id) => setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const del = (id) => setTodos(todos.filter((t) => t.id !== id));

  const shown = useMemo(
    () => todos.filter((t) => (filter === "all" ? true : filter === "done" ? t.done : !t.done)),
    [todos, filter]
  );
  const left = todos.filter((t) => !t.done).length;

  return (
    <>
      <h1>Project: Todo app</h1>
      <form onSubmit={add}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="What to do?" />
        <button>Add</button>
      </form>
      {["all", "active", "done"].map((f) => (
        <button key={f} disabled={filter === f} onClick={() => setFilter(f)}>{f}</button>
      ))}
      <ul>{shown.map((t) => <TodoItem key={t.id} todo={t} onToggle={toggle} onDelete={del} />)}</ul>
      <p>{left} item(s) left</p>
      <div className="exercise">EXERCISE: add edit-in-place, "clear completed", and drag-free reordering (move up/down).</div>
    </>
  );
}
