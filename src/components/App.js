import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  const [isclicked, setClicked] = useState(false);

  // Update paragraph when button is clicked
  const handleClick = () => {
    setClicked(!isclicked);
    if (isclicked) {
      setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
    } 
  };

  return (
    <div id="main">
      {isclicked && <p id="para">{para}</p>}
      <button id="click" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default App;
