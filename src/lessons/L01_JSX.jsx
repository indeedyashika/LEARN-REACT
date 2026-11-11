// JSX = JavaScript that looks like HTML. Rules:
// 1) one root element (or <></> fragment)  2) className not class  3) {} to embed JS
// 4) close every tag  5) camelCase attributes (onClick, htmlFor)
export default function L01() {
  const name = "Yashika";
  const style = { color: "tomato", fontWeight: "bold" };
  const items = [1, 2, 3].map((n) => n * 2);
  return (
    <>
      <h1>JSX</h1>
      <p>Hello, {name.toUpperCase()}! 2 + 3 = {2 + 3}</p>
      <p style={style}>Inline style is an object</p>
      <p className="card">Items: {items.join(", ")}</p>
      <img alt="placeholder" width="40" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" />
      <div className="exercise">EXERCISE: show today's date and a greeting that depends on the hour.</div>
    </>
  );
}
