import React, {useState, useCallback} from "react";
import {ShowIncrement} from "./ShowIncrement";
import "./style.css";

export const CallbackHook = () => {

  const [counter, setCounter ] = useState(10)

  const increment = useCallback( ()=>{
    setCounter(c => c + 1)
  }, [setCounter])

  return (
    <div>
      <h1>Callback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment = {increment} />
    </div>
  );
};

// Ahora ya lo solucionamos