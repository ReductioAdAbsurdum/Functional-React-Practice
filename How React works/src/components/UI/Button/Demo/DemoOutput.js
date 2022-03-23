import React from "react";

const DemoOutput = (props) => {
    console.log("Demo");
  return <p>{props.show ? "This is new!" : "" }</p>;
};

export default DemoOutput;
