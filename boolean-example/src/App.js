import "./App.css";
import { useState } from "react";

function App() {
  let [display, setDisplay] = useState(false);
  const changeDisplay = () => {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };
  return (
    <div className="App">
      <h1>Booleanの使い方例</h1>
      {display && <h2>DisplayがTrueだよ！！</h2>}
      <button onClick={changeDisplay}>真偽値を変える</button>
    </div>
  );
}

export default App;
