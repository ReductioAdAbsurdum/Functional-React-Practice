import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

import "./App.css";

const App = () => {
  console.log("App")
  const [showParagraph, setShowParagraph] = useState(true);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevState) => !prevState);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>

    </div>
  );
};

export default App;
