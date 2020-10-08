import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

import "./style.css";

export const Memorize = () => {
  const { state, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={state} />
      </h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          increment(1);
        }}
      >
        +1
      </button>

      <button className="btn btn-outline-primary ml-3" onClick={()=>{setShow(!show)}}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

/* Si hacemos click en el boton Show/Hide volverá a aparecer el emnsaje del componente Small
*  Esto es porque react nota un cambio en el state y vuelve a dibujar nuestro componente
*  lo que llama al mensaje. Esto puede ser un problema en una aplicacion grande 
*/
