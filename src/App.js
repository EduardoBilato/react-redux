import Reacte, { useState } from "react";
import AppCtx from "./Context";
import Counter from "./Counter";
import './App.css';


export default function App() {
  const [total, setTotal] = useState(0);
  return (
    <div>
      <AppCtx.Provider value={[total, setTotal]} >
        APP {total}
        <Counter />
        <button type="button" onClick={() => setTotal(total + 1)}>APPCounter +</button>
      </AppCtx.Provider>
    </div>
  );
}