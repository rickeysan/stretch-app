import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import person1 from "/sample1.png";
import person2 from "/sample2.png";
import person3 from "/sample3.png";

function App() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const setShowHandler = () => {
    setClicked(true);
  };
  const setHiddenHandler = () => {
    setClicked(false);
  };

  return (
    <div className="App">
      <h1 className="text-orange-400">ストレッチアプリ</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button onClick={() => setShowHandler()}>表示</Button>
      <Button onClick={() => setHiddenHandler()}>非表示</Button>
      <div>
        {clicked && (
          <div className="flex">
            <img src={person1} className="w-96" alt="person1" />
            <img src={person2} className="w-96" alt="person1" />
            <img src={person3} className="w-96" alt="person1" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
