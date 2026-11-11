import { useState } from "react";
// Controlled inputs: value comes from state, onChange updates state.
export default function L04() {
  const [form, setForm] = useState({ name: "", email: "", role: "student", agree: false });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });  // one handler for all fields
  };
  const handleSubmit = (e) => {
    e.preventDefault();                                                    // stop page reload
    setSubmitted(form);
  };

  return (
    <>
      <h1>Events & Forms</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="dev">Developer</option>
        </select>
        <label><input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} /> I agree</label>
        <button disabled={!form.agree}>Submit</button>
      </form>
      <pre>{JSON.stringify(submitted ?? form, null, 2)}</pre>
      <div className="exercise">EXERCISE: add validation (name required, email contains @) and show error messages.</div>
    </>
  );
}
