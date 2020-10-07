import React, { useState, useEffect } from "react";

export const Message = () => {

  const [coors, setCoors] = useState({x: 0, y: 0})
  const { x, y } = coors;

  const mouseMove = (e) => {
    const cordenadas = { x: e.x, y: e.y };
    setCoors(cordenadas);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  return (
    <div>
      <h3>Soy genial</h3>
      <p>x: {x}, y: {y}</p>
    </div>
  );
};
