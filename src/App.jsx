import { useState, createContext } from "react";
import "./App.css";
import Parent from "./components/Parent";

export const FamilyContext = createContext();

function App() {
  // console.log(FamilyContext);

  const [style, setStyle] = useState({
    color: "white",
    backgroundColor: "blue",
  });

  function changeStyle() {
    let newStyle = {
      color: style.color === "white" ? "black" : "white",
      backgroundColor: style.backgroundColor === "blue" ? "red" : "blue",
    };
    setStyle(newStyle);
  }

  return (
    <div>
      <button onClick={changeStyle}>Change</button>
      <br />
      <br />
      <span style={style}>GrandParent (App)</span>
      <br />
      <br />
      {/*//Step 2: provide the context (and its values) to nested components that
      need it*/}
      <FamilyContext.Provider value={style}>
        <Parent style={style} changeStyle={changeStyle} />
      </FamilyContext.Provider>
    </div>
  );
}

export default App;
