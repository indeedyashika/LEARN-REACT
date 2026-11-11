import { useReducer } from "react";
// useReducer: state + a pure function (state, action) => newState. Good for complex state.
const initial = { items: [], nextId: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "add": return { items: [...state.items, { id: state.nextId, text: action.text, done: false }], nextId: state.nextId + 1 };
    case "toggle": return { ...state, items: state.items.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t)) };
    case "remove": return { ...state, items: state.items.filter((t) => t.id !== action.id) };
    case "clear": return initial;
    default: throw new Error("Unknown action " + action.type);
  }
}

export default function L09() {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <>
      <h1>useReducer</h1>
      <button onClick={() => dispatch({ type: "add", text: "Task " + state.nextId })}>add</button>
      <button onClick={() => dispatch({ type: "clear" })}>clear</button>
      <ul>
        {state.items.map((t) => (
          <li key={t.id}>
            <span className={"todo" + (t.done ? " done" : "")} onClick={() => dispatch({ type: "toggle", id: t.id })}>{t.text}</span>
            <button onClick={() => dispatch({ type: "remove", id: t.id })}>x</button>
          </li>
        ))}
      </ul>
      <div className="exercise">EXERCISE: add an "edit" action and a "markAllDone" action.</div>
    </>
  );
}
