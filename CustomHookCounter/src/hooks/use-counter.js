import { useState, useEffect } from "react";

const useCounter = (tick) => {
  const [counter, setCounter] = useState(0);
  const counterTick = useState(tick)[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + counterTick);
    }, 1000);

    return () => clearInterval(interval);
  }, [counterTick]);

  return counter;
};

export default useCounter;
