import { useState } from "react";
import L01 from "./lessons/L01_JSX.jsx";
import L02 from "./lessons/L02_Props.jsx";
import L03 from "./lessons/L03_State.jsx";
import L04 from "./lessons/L04_EventsForms.jsx";
import L05 from "./lessons/L05_ListsConditional.jsx";
import L06 from "./lessons/L06_UseEffect.jsx";
import L07 from "./lessons/L07_UseRef.jsx";
import L08 from "./lessons/L08_Context.jsx";
import L09 from "./lessons/L09_UseReducer.jsx";
import L10 from "./lessons/L10_CustomHooks.jsx";
import L11 from "./lessons/L11_LiftingState.jsx";
import L12 from "./lessons/L12_TodoProject.jsx";

const lessons = [
  ["01 JSX", L01], ["02 Props & children", L02], ["03 State (useState)", L03],
  ["04 Events & forms", L04], ["05 Lists & conditionals", L05], ["06 useEffect & fetch", L06],
  ["07 useRef & useMemo", L07], ["08 Context", L08], ["09 useReducer", L09],
  ["10 Custom hooks", L10], ["11 Lifting state", L11], ["12 Project: Todo app", L12],
];

export default function App() {
  const [i, setI] = useState(0);
  const Lesson = lessons[i][1];
  return (
    <div className="layout">
      <nav>
        <h2>Learn React</h2>
        {lessons.map(([title], idx) => (
          <button key={title} className={idx === i ? "active" : ""} onClick={() => setI(idx)}>{title}</button>
        ))}
      </nav>
      <main>
        <Lesson />
      </main>
    </div>
  );
}
