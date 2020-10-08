import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

import "./style.css";

export const MemoHook = () => {
  const { state, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for(let i = 0; i<iteraciones; i++){
      console.log("Ahi vamos....");
    }
    return `${iteraciones} iteraciones realizadas`
  }

  return (
    <div>
      <h1>MemoHook</h1>  
      <h3>
        Counter: <small>{state}</small>
      </h3>
      <hr />

      <p>{procesoPesado(state)}</p>

      <button
        className="btn btn-primary"
        onClick={() => {
          increment(1);
        }}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

// Hay un proceso pesado que es un fastidio en el navegador
