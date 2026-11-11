import { useState } from "react";
// State = data that changes over time. Updating it re-renders the component.
// NEVER mutate state: create a new array/object instead.
export default function L03() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Yash", age: 18 });
  const [tags, setTags] = useState(["js"]);

  return (
    <>
      <h1>State</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {/* use the functional form when new value depends on old */}
      <button onClick={() => { setCount((c) => c + 1); setCount((c) => c + 1); }}>+2</button>
      <button onClick={() => setCount(0)}>reset</button>

      <p>{user.name} is {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>Birthday</button>

      <p>Tags: {tags.join(", ")}</p>
      <button onClick={() => setTags([...tags, "react"])}>Add tag</button>
      <button onClick={() => setTags(tags.filter((t) => t !== "react"))}>Remove react</button>
      <div className="exercise">EXERCISE: make a like/dislike counter that can't go below 0.</div>
    </>
  );
}
