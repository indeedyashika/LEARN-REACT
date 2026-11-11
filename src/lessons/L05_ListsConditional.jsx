import { useState } from "react";
// Lists need a stable unique key (NOT array index if the list can reorder/delete).
const PRODUCTS = [
  { id: 1, name: "Pen", price: 10, inStock: true },
  { id: 2, name: "Notebook", price: 50, inStock: false },
  { id: 3, name: "Bag", price: 500, inStock: true },
];

export default function L05() {
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [query, setQuery] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const visible = PRODUCTS
    .filter((p) => (onlyInStock ? p.inStock : true))
    .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <h1>Lists & Conditional rendering</h1>
      <input placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <label><input type="checkbox" checked={onlyInStock} onChange={(e) => setOnlyInStock(e.target.checked)} /> in stock only</label>

      {visible.length === 0 && <p>No products found</p>}        {/* && short circuit */}
      <ul>
        {visible.map((p) => (
          <li key={p.id}>{p.name} - ₹{p.price} {p.inStock ? "✅" : "❌"}</li>  /* ternary */
        ))}
      </ul>

      {loggedIn ? <button onClick={() => setLoggedIn(false)}>Logout</button> : <button onClick={() => setLoggedIn(true)}>Login</button>}
      <div className="exercise">EXERCISE: add sort by price (asc/desc) without mutating PRODUCTS.</div>
    </>
  );
}
