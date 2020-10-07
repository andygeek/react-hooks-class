import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement } = useCounter();

  return (
    <>
      <h1>Counter With Hook: {state}</h1>
      <hr />

      <button onClick={increment} className="btn">
        + 1
      </button>
      <button onClick={decrement} className="btn">
        - 1
      </button>
    </>
  );
};
