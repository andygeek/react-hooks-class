import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Hook: {state}</h1>
      <hr />

      <button onClick={()=> increment(5)} className="btn">
        + 5
      </button>
      <button onClick={()=> decrement(2)} className="btn">
        - 2
      </button>
      <button onClick={reset} className="btn">
        reset
      </button>
    </>
  );
};
