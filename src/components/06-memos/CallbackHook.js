import React, {useState} from "react";
import {ShowIncrement} from "./ShowIncrement";
import "./style.css";

export const CallbackHook = () => {

  const [counter, setCounter ] = useState(10)
  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>Callback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment = {increment} />
    </div>
  );
};

// Cada vez que hacmeos click en el boton el elemento se vuelve a generar mandano el mensaje (me volvi a generar)
// Cuando el componente CallbackHook se renderiza se genera la funcion increment
// y esa funcion es una constante almacenada en memoria que cada vez que lo generemos
// se vuelve a crear en estpacio de memoria distinto, por esta razon si usamos el react.memo
// no seriviria de nada
