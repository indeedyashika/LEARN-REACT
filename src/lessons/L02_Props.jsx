// Props flow DOWN (parent -> child) and are read-only.
function Card({ title, price = 0, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>
      {children}
    </div>
  );
}

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;   // functions can be props too
}

export default function L02() {
  return (
    <>
      <h1>Props</h1>
      <Card title="Notebook" price={50}><em>children go between the tags</em></Card>
      <Card title="Free item" />
      <Button label="Click me" onClick={() => alert("clicked")} />
      <div className="exercise">EXERCISE: build a Profile card (name, role, skills array) and render 3 of them.</div>
    </>
  );
}
